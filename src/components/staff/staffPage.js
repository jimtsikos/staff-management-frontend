import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StaffList from './staffList'
import { fetchStaff } from '../../store/actions/staffActions' 

class StaffPage extends React.Component {
    componentDidMount() {
        this.props.fetchStaff(6);
    }

    render() {
        return (
            <div className="container">
                <StaffList staff={this.props.staff} business={this.props.business} />
            </div>
        );
    }
}

StaffPage.propTypes = {
    staff: PropTypes.array.isRequired,
    fetchStaff: PropTypes.func.isRequired
    //business: PropTypes.object.isRequired
}

function mapStateToProps (state) {
    return {
        staff: state.staff,
        //business: state.businesses.filter(business => business.id === "2")
    }
}

export default connect(
    mapStateToProps,
    { fetchStaff }
)(StaffPage);