import { SET_BUSINESSES, ADD_BUSINESS, DELETE_BUSINESS } from './type'
import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const setBusinesses = (businesses) => {
    return {
        type: SET_BUSINESSES,
        businesses
    }
};

export const fetchBusinesses = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/businesses`)
        .then(response => {
            dispatch(setBusinesses(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const addBusiness = business => {
    return {
        type: ADD_BUSINESS,
        business
    }
}

export const saveBusiness = data => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/business`, { name: data.name, location: data.location, type: data.type })
        .then(response => {
            dispatch(addBusiness(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
}

export const businessDeleted = id => {
    return {
        type: DELETE_BUSINESS,
        id
    }
}

export const deleteBusiness = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/business/${id}`)
        .then(response => {
            dispatch(businessDeleted(id))
        })
        .catch(error => {
            throw(error);
        });
    };
}