import { combineReducers } from 'redux';
import userReducer from './userReducer';
import refReducer from './refReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    user: userReducer,
    ref: refReducer,
    error: errorReducer,
    auth: authReducer
});