import { SET_STAFF, ADD_MEMBER, DELETE_MEMBER, SET_MEMBER, UPDATE_MEMBER } from '../actions/type'

export default function staff(state = [], action = {}){
    switch (action.type) {
        case SET_STAFF:
            return action.staff;
        case SET_MEMBER:
            const index = state.findIndex(x => x.id === action.member[0].id);
            if (index > -1) {
                return state.map(x => {
                    return x.id === action.member[0].id ? action.member[0] : x;
                });
            } else {
                return [
                    ...state,
                    action.member[0]
                ]
            }
        case ADD_MEMBER:
            return [
                ...state,
                action.member
            ];
        case UPDATE_MEMBER:
            return state.map(x => {
                return x.id === action.member.id ? action.member : x;
            });
        case DELETE_MEMBER:
            return state.filter(x => x.id !== action.id);
        default:
            return state;
    }
}