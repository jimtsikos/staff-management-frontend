import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const button = {
  width: '120px'
};

export default function Business({ business }) {
  return (
    <tr>
      <td>{ business.id }</td>
      <td>{ business.name }</td>
      <td>{ business.location }</td>
      <td>{ business.type }</td>
      <td>
        {/* <Link to={`/staff/business`} className="btn btn-primary" onClick={() => showStaff(id, name)}>Show Staff</Link> */}
      </td>
      <td>
        {/* <Link to={`/business/${id}`} className="btn btn-warning">Edit</Link> */}
      </td>
      <td>
        {/* <button className="btn btn-danger" type="button" style={ button } onClick={() => onDelete(id)}>
          Remove
        </button> */}
      </td>
    </tr>
  );
};

Business.propTypes = {
    business: PropTypes.object.isRequired
}