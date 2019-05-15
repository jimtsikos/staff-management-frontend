import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

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
        <div className="container">
            <Link to="/business/create" className="btn btn-info">Add Business</Link>
            <div style={style}>
                { businesses.length === 0 ? emptyMessage : businessesList }
            </div>
        </div>
    );
}

BussinessesList.propTypes = {
    businesses: PropTypes.array.isRequired
}