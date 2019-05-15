import React from 'react'
import PropTypes from 'prop-types'

export default function BussinessesList({ businesses }) {
    const style = {
        "margin-top" : "20px"
    }

    const emptyMessage = (
        <div className="alert alert-info" role="alert">
            There are no businesses available yet.
        </div>
    );
    
    const businessesList = (
        <div>
            Here will be loaded the list of businesses.
        </div>
    );

    return (
        <div className="container" style={style}>
            { businesses.length === 0 ? emptyMessage : businessesList }
        </div>
    );
}

BussinessesList.propTypes = {
    businesses: PropTypes.array.isRequired
}