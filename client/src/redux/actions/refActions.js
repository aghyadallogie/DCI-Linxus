import { FETCH_REFS, SEARCH_USERS } from './types';
import { helpFetchRefs } from '../helpers';
import { searchUsers } from '../helpers';

export const fetchRefsAction = () => async dispatch => {
    // dispatch(setRefsLoading());
    const response = await helpFetchRefs();
    dispatch({
        type: FETCH_REFS,
        payload: response.data
    })
}

export const searchUsersAction = (A, B) => async dispatch => {
    const response = await searchUsers(A, B);
    console.log(response.data);
    dispatch({
        type: SEARCH_USERS,
        payload: response.data
    })
}