import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Member from './member';

export default function StaffList ({ staff, business }) {
    const style = {
        "marginTop" : "20px"
    }

    const noBusinessMessage = (
        <div className="alert alert-danger" role="alert">
            Business not found
        </div>
    )

    const emptyMessage = (
        <div className="alert alert-info" role="alert">
            There are no staff available yet.
        </div>
    );

    const staffList = (
        <table className="table">
            <thead>
            <tr>
                <th>#</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Position</th>
                <th>Phone Number</th>
                <th colSpan="2">Actions</th>
            </tr>
            </thead>
            <tbody>
            {staff.map(member => {
                return (
                    <Member member={ member } key={ member.id } />
                );
            })}
            </tbody>
        </table>
    );

    return (
        <div className="container">
            { business === undefined || business.length === 0 ? noBusinessMessage : (
                <div>
                    <h2>Business name: {business[0].name}</h2>
                    <Link to="/member/create" className="btn btn-info">Add Member</Link>
                    <div style={style}>
                        { staff === undefined || staff.length === 0 ? emptyMessage : staffList }
                    </div>
                </div>
            ) }
        </div>
    )
}

StaffList.propTypes = {
    staff: PropTypes.array.isRequired,
    business: PropTypes.array.isRequired
}