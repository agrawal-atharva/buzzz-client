import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const getSinglePost = (postId) => async (dispatch) => {
	const response = await axios.get(`/post/${postId}`);
	console.log('Single Post response :', response);
	dispatch({ type: ActionType.GET_SINGLE_POST, payload: response.data });
};
