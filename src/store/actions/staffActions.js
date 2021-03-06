import { SET_STAFF, ADD_MEMBER, DELETE_MEMBER, SET_MEMBER, UPDATE_MEMBER } from './type';
import { STAFF_MANAGEMENT_API_URL } from './apiUrls'
import axios from 'axios';

const apiUrl = STAFF_MANAGEMENT_API_URL;

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

export const memberDeleted = id => {
    return {
        type: DELETE_MEMBER,
        id
    }
}

export const deleteMember = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/staff/member/${id}`)
        .then(response => {
            dispatch(memberDeleted(id))
        })
        .catch(error => {
            throw(error);
        });
    };
}

export const setMember = member => {
    return {
        type: SET_MEMBER,
        member
    }
};

export const fetchMember = id => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/staff/member/${id}`)
        .then(response => {
            dispatch(setMember(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}

export const memberUpdated = member => {
    return {
        type: UPDATE_MEMBER,
        member
    }
}

export const updateMember = data => {
    return (dispatch) => {
        return axios.put(`${apiUrl}/staff/member/${data.id}`, { 
            business_id: parseInt(data.business),
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            position: data.position,
            phone_number: data.phone_number
        })
        .then(response => {
            dispatch(memberUpdated(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}