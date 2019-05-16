import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

const button = {
  width: '120px'
};

export default function Member ({ member }) {
  return (
    <tr>
      <td>{ member.id }</td>
      <td>{ member.email }</td>
      <td>{ member.first_name }</td>
      <td>{ member.last_name }</td>
      <td>{ member.position }</td>
      <td>{ member.phone_number }</td>
      <td>
        <Link to={`/staff/${member.id}`} className="btn btn-primary">Edit</Link>
      </td>
      <td>
        {<button className="btn btn-danger" type="button" style={ button }>
          Remove
        </button>}
      </td>
    </tr>
  );
};

Member.propTypes = {
    member: PropTypes.object.isRequired
}