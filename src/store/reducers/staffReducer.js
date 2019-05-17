import { SET_STAFF, ADD_MEMBER, DELETE_MEMBER } from '../actions/type'

export default function staff(state = [], action = {}){
    switch (action.type) {
        case SET_STAFF:
            return action.staff;
        case ADD_MEMBER:
            return [
                ...state,
                action.member
            ];
        case DELETE_MEMBER:
            return state.filter(x => x.id !== action.id);
        default:
            return state;
    }
}