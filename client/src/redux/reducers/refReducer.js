import { FETCH_REFS, STORE_FILTERS, PATCH_REFS } from '../actions/types';

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
            return {
                ...state,
                filters: action.payload
            }
        default:
            return state;
    }
}