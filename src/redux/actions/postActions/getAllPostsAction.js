import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const getAllPost = (userId) => async (dispatch) => {
	const response = await axios.get(`/post/allpost/${userId}`);
	console.log('Post response :', response);
	dispatch({ type: ActionType.GET_ALL_POST, payload: response });
};
