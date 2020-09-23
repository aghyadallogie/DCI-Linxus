import { FETCH_REFS, SEARCH_USERS, PATCH_REFS } from './types';
import { helpFetchRefs, searchUsers, patchUserRefs } from '../helpers';

export const fetchRefsAction = () => async dispatch => {

    const response = await helpFetchRefs();
    dispatch({
        type: FETCH_REFS,
        payload: response.data
    })
}

export const searchUsersAction = (A, B) => async dispatch => {
    const response = await searchUsers(A, B);
    dispatch({
        type: SEARCH_USERS,
        payload: response.data
    })
}
