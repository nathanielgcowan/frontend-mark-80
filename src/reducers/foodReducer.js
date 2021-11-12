// foodReducer takes in the action type. The Reducer updates the state
import { FETCH_FOOD, NEW_FOOD } from '../actions/types';

export default function( state = {foods:[], food: {}}, action) {
    switch(action.type) {
        case 'FETCH_FOOD':
            return { ...state, items: action.payload };
        case 'NEW_FOOD':
            return { ...state, item: action.payload };
        default:
            return state;
    }
}