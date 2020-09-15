import { USER_LOADING, USER_LOADED, AUTH_ERROR, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/types';
import { helpRegisterUser } from '../helpers/index';
import { helpLoginUser } from '../helpers/index';
import { helpFetchMe } from '../helpers/index';

export const loadUser = () => async (dispatch, getState) => {

    dispatch({ type: USER_LOADING });
    const token = getState().auth.token; // why user selector then why not always use the same as here ?!
    if (token) {
        try {
            const response = await helpFetchMe();
            dispatch({
                type: USER_LOADED,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: AUTH_ERROR
            });
        }
    } else {
        dispatch({ type: AUTH_ERROR })
    }
}

export const registerAction = registerData => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify(registerData);

    try {
        const response = await helpRegisterUser(body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response.data // not working
        });
    }
}

export const loginAction = loginData => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify(loginData);

    try {
        const response = await helpLoginUser(body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response.data // not working
        });
    }
}

export const logout = () => {
    return { type: LOGOUT_SUCCESS } // we return instead of dispatch because its logout sync
}

// setup config/headers and token
export const tokenConfig = token => {
    // shouldnt we provide token here ? do we even need this ?
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }

    if (token) {
        config.headers['auth-token'] = token;
    }
    return config;
}