import React from 'react'
import { connect } from 'react-redux'
import { saveBusiness, fetchBusiness, updateBusiness } from '../../store/actions/businessesActions'
import { fetchBusinessTypes } from '../../store/actions/enumTypes'
import { Redirect } from 'react-router-dom'
import BusinessForm from '../../components/business/businessForm';
import PropTypes from 'prop-types'

class BusinessFormPage extends React.Component {
    state = {
        redirect: false
    }

    componentDidMount() {
        this.props.fetchBusinessTypes();
        if (this.props.match.params.id) {
            this.props.fetchBusiness(this.props.match.params.id)
        }
    }

    saveBusiness = ({ id, name, location, type }) => {
        if (id) {
            return this.props.updateBusiness({ id, name, location, type })
            .then(() => { this.setState({ redirect: true }) });
        } else {
            return this.props.saveBusiness({ name, location, type })
            .then(() => { this.setState({ redirect: true }) });
        }
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.redirect 
                    ? <Redirect to="/businesses" />
                    : <BusinessForm business={this.props.business} businessTypes={this.props.businessTypes} saveBusiness={this.saveBusiness} />
                }
            </div>
        );
    }
}

BusinessFormPage.propTypes = {
    businessTypes: PropTypes.array.isRequired,
    saveBusiness: PropTypes.func.isRequired,
    fetchBusinessTypes: PropTypes.func.isRequired,
    fetchBusiness: PropTypes.func.isRequired,
    updateBusiness: PropTypes.func.isRequired
}

function mapStateToProps(state, props) {
    let obj = {
        businessTypes: state.enumTypes,
        business: null
    };

    if (props.match.params.id) {
        obj.business = state.businesses.find(x => x.id === parseInt(props.match.params.id))
    }

    return obj;
}

export default connect(
    mapStateToProps,
    { saveBusiness, fetchBusinessTypes, fetchBusiness, updateBusiness }
)(BusinessFormPage);