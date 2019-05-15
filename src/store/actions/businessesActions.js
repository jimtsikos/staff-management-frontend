import { SET_BUSINESSES } from './type'
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