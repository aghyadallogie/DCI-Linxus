import { combineReducers } from 'redux';
import userReducer from './userReducer';
import refReducer from './refReducer';

export default combineReducers({
    // user: userReducer,
    ref: refReducer
});