import { SET_STAFF } from './type';

import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const setStaff = (staff) => {
    return {
        type: SET_STAFF,
        staff
    }
};

export const fetchStaff = (business_id) => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/staff/business/${business_id}`)
        .then(response => {
                dispatch(setStaff(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}