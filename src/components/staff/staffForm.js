import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';
import { fetchBusinesses } from '../../store/actions/businessesActions';
import { saveMember } from "../../store/actions/staffActions";
import CreateOptions from '../common/options'

class StaffForm extends React.Component {
    state = {
        business: '',
        email: '',
        first_name: '',
        last_name: '',
        position: '',
        phone_number: '',
        errors: {},
        sending: false,
        done: false
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id !== undefined) {
            this.setState({business: parseInt(id)})
        }
        this.props.fetchBusinesses();
    }

    handleChange = (e) => {
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];

        this.setState({ 
            [e.target.name]: e.target.value,
            errors
        });
    }

    toggleButtonText = () => {
        if (this.state.sending) {
            return (
                <span>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span> Sending...</span>
                </span>
            );
        } else {
            return "Submit";
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // validation
        let errors = {};
        if (this.state.business === '') errors.business = "You must select a business";
        if (this.state.email === '') errors.email = "Email can't be empty";
        if (this.state.first_name === '') errors.first_name = "First name can't be empty";
        if (this.state.last_name === '') errors.last_name = "Last name can't be empty";
        if (this.state.position === '') errors.position = "You must select a position";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { business, email, first_name, last_name, position, phone_number } = this.state;
            this.setState({ sending: true });
            this.props.saveMember({ business, email, first_name, last_name, position, phone_number }).then(
                () => { this.setState({ done: true }) },
                (err) => {
                    let errors = {};
                    errors.global = err.response.statusText;
                    this.setState({ errors, sending: false });
                }
            );
        }
    }

    render() {
        const form = (
            <div className="container">
                {!!this.state.errors.global &&
                (
                    <div className="alert alert-danger" role="alert">
                        { this.state.errors.global }
                    </div>
                )}

                <form onSubmit={this.handleSubmit}>
                    <div className={classnames("form-group", { error: !!this.state.errors.business })}>
                        <label htmlFor="business">Business</label>
                        <select id="business" 
                                className="form-control" 
                                name="business" 
                                value={this.state.business} 
                                onChange={this.handleChange}>
                                    <option value="0">Select business</option>
                                    <CreateOptions properties={ this.props.businesses } />
                        </select>
                        <span className="text-danger">{ this.state.errors.business }</span>
                    </div>
                    <div className={classnames("form-group", { error: !!this.state.errors.email })}>
                        <label htmlFor="email">Email *</label>
                        <input type="email" 
                                id="email" 
                                className="form-control" 
                                name="email" 
                                placeholder="Staff member email"
                                value={this.state.email}
                                onChange={this.handleChange} />
                        <span className="text-danger">{ this.state.errors.email }</span>
                    </div>
                    <div className={classnames("form-group", { error: !!this.state.errors.first_name })}>
                        <label htmlFor="first_name">Firstname *</label>
                        <input type="text" 
                                id="first_name" 
                                className="form-control" 
                                name="first_name" 
                                placeholder="Staff member firstname"
                                value={this.state.first_name}
                                onChange={this.handleChange} />
                        <span className="text-danger">{ this.state.errors.first_name }</span>
                    </div>
                    <div className={classnames("form-group", { error: !!this.state.errors.last_name })}>
                        <label htmlFor="last_name">Lastname *</label>
                        <input type="text" 
                                id="last_name" 
                                className="form-control" 
                                name="last_name" 
                                placeholder="Staff member lastname"
                                value={this.state.last_name}
                                onChange={this.handleChange} />
                        <span className="text-danger">{ this.state.errors.last_name }</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position</label>
                        <select id="position" 
                                className="form-control" 
                                name="position" 
                                value={this.state.position} 
                                onChange={this.handleChange}>
                                    <option value="">Select position</option>
                                    <option value="kitchen">Kitchen</option>
                                    <option value="service">Service</option>
                                    <option value="PR">PR</option>
                        </select>
                        <span className="text-danger">{ this.state.errors.position }</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_number">Phone number</label>
                        <input type="text" 
                                id="phone_number" 
                                className="form-control" 
                                name="phone_number" 
                                placeholder="Staff member phone number"
                                value={this.state.phone_number}
                                onChange={this.handleChange} />
                    </div>
                    <button type="submit" 
                            className="btn btn-primary" 
                            disabled={this.state.sending ? "disabled" : ""}>
                                {  this.toggleButtonText() }
                    </button>
                </form>
            </div>
        )

        return (
            <div>
                { this.state.done ? <Redirect to={`/business/${this.state.business}/staff`} /> : form };
            </div>
        )
    }
}

StaffForm.propTypes = {
    fetchBusinesses: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        businesses: state.businesses
    }
}

export default connect(
    mapStateToProps,
    { fetchBusinesses, saveMember }
)(StaffForm);