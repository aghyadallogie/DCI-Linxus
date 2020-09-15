import axios from 'axios';
import {
  USER_LOADING,
  UPDATE_AVATAR,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../actions/types';

// check token and load user

export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({ type: USER_LOADING });
  const token = getState().auth.token;
  if (token) {
    axios
      .get(
        'http://localhost:5000/api/users/me',
        tokenConfig(getState)
      )
      .then((res) =>
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch({ type: AUTH_ERROR });
      });
  } else {
    dispatch({ type: AUTH_ERROR });
  }
};

// register user
export const registerAction = (registerData) => (
  dispatch
) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify(registerData);

  axios
    .post(
      'http://localhost:5000/api/auth/register',
      body,
      config
    )
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({ type: REGISTER_FAIL });
    });
};

// login user
export const loginAction = (loginData) => (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  const body = JSON.stringify(loginData);

  axios
    .post(
      'http://localhost:5000/api/auth/login',
      body,
      config
    ) // api endpoint
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data,
      });
    });
};

// logout user
export const logout = () => {
  return { type: LOGOUT_SUCCESS }; // we return instead of dispatch because its logout sync
};

// setup config/headers and token
export const tokenConfig = (token) => {
  // get token from localstorage

  //Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  // if theres a token add it to headers
  if (token) {
    config.headers['auth-token'] = token;
  }
  return config;
};

export const updateAvatarAction = (payload) => {
  return {
    type: UPDATE_AVATAR,
    payload,
  };
};
