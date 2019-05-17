import { SET_BUSINESSES, ADD_BUSINESS, DELETE_BUSINESS } from '../actions/type'

export default function businesses(state = [], action = {}) {
    switch(action.type) {
        case SET_BUSINESSES:
            return action.businesses;
        case ADD_BUSINESS:
            return [
                ...state,
                action.business
            ]
        case DELETE_BUSINESS:
            return state.filter(x => x.id !== action.id);
        default: 
            return state;
    }
}