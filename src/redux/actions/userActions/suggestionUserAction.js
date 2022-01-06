import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const suggestedUsers = (userId) => async (dispatch) => {
	const response = await axios.get(`/user/${userId}/suggestions`);
	dispatch({ type: ActionType.GET_SUGGESTED_USER, payload: response.data });
};
