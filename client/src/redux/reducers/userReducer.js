import { GET_USERS, SEARCH_USERS } from '../actions/types';

const initialState = {
    users: [],
    matchingUsers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
            }
        case SEARCH_USERS:
            return {
                ...state,
                matchingUsers: action.payload
            }
        default:
            return state;
    }
}