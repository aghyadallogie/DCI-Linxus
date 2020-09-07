import { FETCH_REFS } from './types';
import { helpFetchRefs } from '../helpers';

export const fetchRefs = () => async dispatch => {
    // dispatch(setRefsLoading());
    const response = await helpFetchRefs();
    dispatch({
        type: FETCH_REFS,
        payload: response.data
    })
}