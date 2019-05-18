import { SET_BUSINESS_TYPES, SET_STAFF_POSITION } from './type'
import axios from "axios";

const apiUrl = STAFF_MANAGEMENT_API_URL;

export const setBusinessTypes = businessTypes => {
    return {
        type: SET_BUSINESS_TYPES,
        businessTypes
    }
};

export const fetchBusinessTypes = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/types/businesstype`)
        .then(response => {
            dispatch(setBusinessTypes(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const setStaffPositions = staffPositions => {
    return {
        type: SET_STAFF_POSITION,
        staffPositions
    }
};

export const fetchStaffPositions = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/types/staffposition`)
        .then(response => {
            dispatch(setStaffPositions(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};