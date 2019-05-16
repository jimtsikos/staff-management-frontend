import { SET_STAFF } from '../actions/type'

export default function staff(state = [], action = {}){
    switch (action.type) {
        case SET_STAFF:
            return action.staff;
        default:
            return state;
    }
}