import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StaffList from './staffList'
import { fetchStaff, deleteMember } from '../../store/actions/staffActions' 
import { fetchBusinesses } from '../../store/actions/businessesActions' 
import ErrorMessages from '../common/errorMessages';

class StaffPage extends React.Component {
    state = {
        errors: []
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchStaff(parseInt(id));
        this.props.fetchBusinesses();
    }

    getErrors = (errors) => {
        this.setState({ errors: errors })
    }

    render() {
        const { id } = this.props.match.params

        return (
            <div className="container">
                {!!this.state.errors.length && <ErrorMessages errors={ this.state.errors } /> }
                <StaffList staff={this.props.staff} business={ this.props.businesses.filter(x => x.id === parseInt(id)) } deleteMember={this.props.deleteMember} getErrors={this.getErrors} />
            </div>
        );
    }
}

StaffPage.propTypes = {
    staff: PropTypes.array.isRequired,
    fetchStaff: PropTypes.func.isRequired,
    fetchBusinesses: PropTypes.func.isRequired,
    deleteMember: PropTypes.func.isRequired
}

function mapStateToProps (state) {
    return {
        staff: state.staff,
        businesses: state.businesses
    }
}

export default connect(
    mapStateToProps,
    { fetchStaff, fetchBusinesses, deleteMember }
)(StaffPage);