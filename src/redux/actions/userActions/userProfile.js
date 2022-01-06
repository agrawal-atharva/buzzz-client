import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const userProfile = (id) => async (dispatch) => {
	const response = await axios.get(`/user/${id}`);
	dispatch({ type: ActionType.GET_CURRENT_USER, payload: response.data });
};
