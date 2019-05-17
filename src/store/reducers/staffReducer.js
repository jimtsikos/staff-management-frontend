import { SET_STAFF, ADD_MEMBER } from '../actions/type'

export default function staff(state = [], action = {}){
    switch (action.type) {
        case SET_STAFF:
            return action.staff;
        case ADD_MEMBER:
            return [
                ...state,
                action.member
            ];
        default:
            return state;
    }
}