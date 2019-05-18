import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import CreateOptions from "../common/options";
import FormButton from '../common/formButton'
 
class BusinessForm extends React.Component {
    state = {
        id: this.props.business ? this.props.business.id : null,
        name: this.props.business ? this.props.business.name : '',
        location: this.props.business ? this.props.business.location :'',
        type: this.props.business ? this.props.business.type :'',
        errors: {},
        sending: false
    }

    componentWillReceiveProps = nextProps => {
        if(nextProps.business !== undefined && nextProps.business !== null) {
            this.setState({
                id: nextProps.business.id,
                name: nextProps.business.name,
                location: nextProps.business.location,
                type: nextProps.business.type
            });
        }
    }

    handleChange = (e) => {
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];

        this.setState({ 
            [e.target.name]: e.target.value,
            errors
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // validation
        let errors = {};
        if (this.state.name === '') errors.name = "Name can't be empty";
        if (this.state.location === '') errors.location = "Location can't be empty";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { id, name, location, type } = this.state;
            this.setState({ sending: true });
            this.props.saveBusiness({ id, name, location, type })
            .catch((err) => {
                let errors = {};
                errors.global = err.response.statusText;
                this.setState({ errors, sending: false });
            });
            
        }
    }

    render() {
        const form = (
            <div>
                {!!this.state.errors.global &&
                (
                    <div className="alert alert-danger" role="alert">
                        { this.state.errors.global }
                    </div>
                )}

                <form onSubmit={this.handleSubmit}>
                    <div className={classnames("form-group", { error: !!this.state.errors.name })}>
                        <label htmlFor="name">Name</label>
                        <input type="text" 
                                id="name" 
                                className="form-control" 
                                name="name" 
                                placeholder="Business name"
                                value={this.state.name}
                                onChange={this.handleChange} />
                        <span className="text-danger">{ this.state.errors.name }</span>
                    </div>
                    <div className={classnames("form-group", { error: !!this.state.errors.location })}>
                        <label htmlFor="location">Location</label>
                        <input type="text" 
                                id="location" 
                                className="form-control" 
                                name="location" 
                                placeholder="Business location"
                                value={this.state.location}
                                onChange={this.handleChange} />
                        <span className="text-danger">{ this.state.errors.location }</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <select id="type" 
                                className="form-control" 
                                name="type" 
                                value={this.state.type} 
                                onChange={this.handleChange}>
                                    <option value="">Select one type</option>
                                    <CreateOptions properties={ this.props.businessTypes } />
                        </select>
                    </div>
                    <button type="submit" 
                            className="btn btn-primary" 
                            disabled={this.state.sending ? "disabled" : ""}>
                                {  <FormButton sending={ this.state.sending } /> }
                    </button>
                </form>
            </div>
        )

        return (
            <div>
                { form }
            </div>
        );
    }
}

BusinessForm.propTypes = {
    businessTypes: PropTypes.array.isRequired,
    saveBusiness: PropTypes.func.isRequired
}

export default BusinessForm;