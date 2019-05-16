import { SET_BUSINESSES, ADD_BUSINESS } from '../actions/type'

export default function businesses(state = [], action = {}) {
    switch(action.type) {
        case SET_BUSINESSES:
            return action.businesses;
        case ADD_BUSINESS:
            return [
                ...state,
                action.business
            ]
        default: 
            return state;
    }
}