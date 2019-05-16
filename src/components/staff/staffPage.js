import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StaffList from './staffList'
import { fetchStaff } from '../../store/actions/staffActions' 
import { fetchBusinesses } from '../../store/actions/businessesActions' 

class StaffPage extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.fetchStaff(parseInt(id));
        this.props.fetchBusinesses();
    }

    render() {
        const { id } = this.props.match.params

        return (
            <div className="container">
                <StaffList staff={this.props.staff} business={ this.props.businesses.filter(x => x.id === parseInt(id)) } />
            </div>
        );
    }
}

StaffPage.propTypes = {
    staff: PropTypes.array.isRequired,
    fetchStaff: PropTypes.func.isRequired,
    fetchBusinesses: PropTypes.func.isRequired
}

function mapStateToProps (state) {
    return {
        staff: state.staff,
        businesses: state.businesses
    }
}

export default connect(
    mapStateToProps,
    { fetchStaff, fetchBusinesses }
)(StaffPage);