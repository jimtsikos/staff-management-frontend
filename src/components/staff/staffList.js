import React from 'react'
import PropTypes from 'prop-types'

export default function StaffList ({ staff, business }) {

    const emptyMessage = (
        <div className="alert alert-info" role="alert">
            There are no staff available yet.
        </div>
    );

    const staffList = (
        <div>
            Here will be loaded the list of staff.
        </div>
    );

    return (
        <div className="container">
            { staff.length === 0 || staff === undefined ? emptyMessage : staffList }
        </div>
    )
}

StaffList.propTypes = {
    staff: PropTypes.array.isRequired,
    //business: PropTypes.object.isRequired
}