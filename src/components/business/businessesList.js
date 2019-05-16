import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Business from './business'

export default function BusinessesList({ businesses }) {
    const style = {
        "marginTop" : "20px"
    }

    const emptyMessage = (
        <div className="alert alert-info" role="alert">
            There are no businesses available yet.
        </div>
    );
    
    const businessesList = (
        <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Location</th>
                <th>Type</th>
                <th colSpan="3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {businesses.map(business => {
                return (
                  <Business business={ business } key={ business.id } />
                );
              })}
            </tbody>
        </table>
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

BusinessesList.propTypes = {
    businesses: PropTypes.array.isRequired
}