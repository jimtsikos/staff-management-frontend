import React from 'react'
import classnames from 'classnames'

class BusinessForm extends React.Component {
    state = {
        name: '',
        location: '',
        type: '',
        errors: {},
        sending: false,
        buttonText: "Submit"
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

        //validation
        let errors = {};
        if (this.state.name === '') errors.name = "Name can't be empty";
        if (this.state.location === '') errors.location = "Location can't be empty";
        this.setState({ errors });
        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { name, location, type } = this.state;
            this.setState({ sending: true });
            //this.props.saveBusiness({ name, location, type });
        }
    }

    render() {
        return (
            <div className="container">
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
                                    <option value="bar">Bar</option>
                                    <option value="restaurant">Restaurant</option>
                                    <option value="club">Club</option>
                                    <option value="hotel">Hotel</option>
                                    <option value="cafe">Cafe</option>
                        </select>
                    </div>
                    <button type="submit" 
                            className="btn btn-primary" 
                            disabled={this.state.sending ? "disabled" : ""}>
                                {  this.toggleButtonText() }
                    </button>
                </form>
            </div>
        );
    }
}

export default BusinessForm;