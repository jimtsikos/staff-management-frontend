import { SET_BUSINESS_TYPES, SET_STAFF_POSITION } from '../actions/type'

export default function enumTypes(state = [], action = {}) {
    switch(action.type) {
        case SET_BUSINESS_TYPES:
            let businessTypesArray = [];
            action.businessTypes.map(x => businessTypesArray.push({ 
                id: x.types.toString(),
                name: x.types.toString()
            }))
            return businessTypesArray 
        case SET_STAFF_POSITION:
            let staffPositionsArray = [];
            action.staffPositions.map(x => staffPositionsArray.push(x.types.toString()))
            return staffPositionsArray
        default: 
            return state;
    }
}