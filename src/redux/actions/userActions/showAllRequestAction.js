import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const showAllRequest = (id) => async (dispatch) => {
	console.log('CHECK', id);
	const response = await axios.get(`user/${id}/showRequest`);
	dispatch({ type: ActionType.SHOW_ALL_REQUEST, payload: response.data });
};
