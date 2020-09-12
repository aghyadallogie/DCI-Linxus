import axios from 'axios';
import { USER_LOADING, USER_LOADED, AUTH_ERROR, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/types';
import { returnErrors, clearErrors } from './errorActions'

// check token and load user

export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({ type: USER_LOADING })
    const token = getState().auth.token;
    if (token) {
        axios
            .get('http://localhost:5000/api/users/me', tokenConfig(getState))
            .then(res => dispatch({
                type: USER_LOADED,
                payload: res.data
            }))
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status));
                dispatch({ type: AUTH_ERROR });
            })
    } else {
        dispatch(returnErrors('NO VALID TOKEN!', '400'));
        dispatch({ type: AUTH_ERROR })
    }
}

// register user
export const registerAction = registerData => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify(registerData);

    axios
        .post('http://localhost:5000/api/auth/register', body, config)
        .then(res => dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({ type: REGISTER_FAIL });
        })
}

// login user
export const loginAction = loginData => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify(loginData);

    axios
        .post('http://localhost:5000/api/auth/login', body, config) // api endpoint
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }))
        .catch(err => {
            // dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
            dispatch({ type: LOGIN_FAIL });
        })
}

// logout user
export const logout = () => {
    return { type: LOGOUT_SUCCESS } // why we return instead of dispatch
}

// setup config/headers and token
export const tokenConfig = token => {
    // get token from localstorage

    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    // if theres a token add it to headers
    if (token) {
        config.headers['auth-token'] = token;
    }
    return config;
}