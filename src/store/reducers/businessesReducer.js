import { SET_BUSINESSES, ADD_BUSINESS, DELETE_BUSINESS, SET_BUSINESS, UPDATE_BUSINESS } from '../actions/type'

export default function businesses(state = [], action = {}) {
    switch(action.type) {
        case SET_BUSINESSES:
            return action.businesses;
        case SET_BUSINESS:
            const index = state.findIndex(x => x.id === action.business[0].id);
            if (index > -1) {
                return state.map(x => {
                    return x.id === action.business[0].id ? action.business[0] : x;
                });
            } else {
                return [
                    ...state,
                    action.business[0]
                ]
            }
        case ADD_BUSINESS:
            return [
                ...state,
                action.business
            ]
        case UPDATE_BUSINESS:
            return state.map(x => {
                return x.id === action.business.id ? action.business : x;
            });
        case DELETE_BUSINESS:
            return state.filter(x => x.id !== action.id);
        default: 
            return state;
    }
}