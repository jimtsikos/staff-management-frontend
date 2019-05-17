import { SET_STAFF, ADD_MEMBER } from './type';

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

export const addMember = member => {
    return {
        type: ADD_MEMBER,
        member
    }
}

export const saveMember = data => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/staff/member`, { 
            business_id: parseInt(data.business),
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            position: data.position,
            phone_number: data.phone_number
        })
        .then(response => {
            dispatch(addMember(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}