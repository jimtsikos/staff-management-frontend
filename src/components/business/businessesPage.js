import React from 'react'
import { connect } from 'react-redux'
import BussinessesList from './businessesList';
import PropTypes from 'prop-types'
import { fetchBusinesses, deleteBusiness } from '../../store/actions/businessesActions'
import ErrorMessages from '../common/errorMessages';

class BusinessesPage extends React.Component {
    state = {
        errors: []
    }

    componentDidMount() {
        this.props.fetchBusinesses();
    }

    getErrors = (errors) => {
        this.setState({ errors: errors })
    }

    render() {
        return (
            <div className="container">
                {!!this.state.errors.length && <ErrorMessages errors={ this.state.errors } /> }
                <BussinessesList businesses={this.props.businesses} deleteBusiness={this.props.deleteBusiness} getErrors={this.getErrors} />
            </div>
        );
    }
}

BusinessesPage.propTypes = {
    businesses: PropTypes.array.isRequired,
    fetchBusinesses: PropTypes.func.isRequired,
    deleteBusiness: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        businesses: state.businesses
    }
}

export default connect(
    mapStateToProps,
    { fetchBusinesses, deleteBusiness }
)(BusinessesPage);