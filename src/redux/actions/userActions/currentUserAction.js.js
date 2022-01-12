import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const currentUser = () => async (dispatch) => {
	const response = await axios.get('/user/current');
	dispatch({ type: ActionType.GET_CURRENT_USER, payload: response.data });
};
