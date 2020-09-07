import { FETCH_REFS } from '../actions/types';
import { STORE_FILTERS } from '../actions/types';

const initialState = {
    refs: ['Aghy', 'Julia', 'Joao']
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_REFS:
            return {
                ...state,
                refs: action.payload
            }
        case STORE_FILTERS:
            console.log(action.payload);
            return {
                ...state,
                filters: action.payload
            }
        default:
            return state;
    }
}