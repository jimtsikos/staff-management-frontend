import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const button = {
  width: '120px'
};

export default function Business({ business, deleteBusiness, getErrors }) {
  const handleDelete = (e) => {
    e.preventDefault();

    deleteBusiness(business.id).then(
      () => { getErrors("") },
      (err) => {
        let errors = [];
        err.response.data.errors.map(x => errors.push({ id: x.code, message: x.message }))
        getErrors(errors);
      }
    );
  }

  return (
    <tr>
      <td>{ business.id }</td>
      <td>{ business.name }</td>
      <td>{ business.location }</td>
      <td>{ business.type }</td>
      <td>
        <Link to={`business/${business.id}/staff`} className="btn btn-primary">Show Staff</Link>
      </td>
      <td>
        <Link to={`/business/edit/${business.id}`} className="btn btn-warning">Edit</Link>
      </td>
      <td>
        {<button className="btn btn-danger" type="button" style={ button } onClick={handleDelete}>
          Remove
        </button>}
      </td>
    </tr>
  );
};

Business.propTypes = {
    business: PropTypes.object.isRequired,
    deleteBusiness: PropTypes.func.isRequired
}