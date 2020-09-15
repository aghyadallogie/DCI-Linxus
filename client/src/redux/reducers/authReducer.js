import { USER_LOADED, USER_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR } from '../actions/types';

const initialState = {
    token: localStorage.getItem('auth-token'),
    refs: [],
    restRefs: [],
    isAuthenticated: false,
    isLoading: false,
    user: null,
    errorMsg: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('auth-token', action.payload.token);
            return {
                ...state,
                ...action.payload, // cuz payload already has user and token sent from api
                isAuthenticated: true,
                isLoading: false,
                errorMsg: '',
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            // localStorage.removeItem('auth-token');
            return {
                ...state,
                // token: null,
                // user: null,
                // isAuthenticated: false,
                isLoading: false,
                errorMsg: action.payload
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('auth-token');
            return {
                ...state,
                token: null,
                user: null,
                refs: [],
                restRefs: [],
                isAuthenticated: false,
                isLoading: false,
                errorMsg: action.payload
            };
        default:
            return state;
    }
}