import { combineReducers } from 'redux';
import userReducer from './userReducer';
import refReducer from './refReducer';
import authReducer from './authReducer';

export default combineReducers({
    user: userReducer,
    ref: refReducer,
    auth: authReducer
});