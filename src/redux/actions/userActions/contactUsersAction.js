import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const contactUser = (id) => async (dispatch) => {
	const response = await axios.get(`/user/contacts/${id}`);
	dispatch({ type: ActionType.GET_CONTACT_USER, payload: response.data });
};
