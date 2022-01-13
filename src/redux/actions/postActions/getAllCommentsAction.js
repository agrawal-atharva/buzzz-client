import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const getAllComments = () => async (dispatch) => {
	const response = await axios.get(`/post/comment/${postId}`);
	console.log('All Comments', response.data);
	dispatch({ type: ActionType.GET_ALL_COMMENTS, payload: response.data });
};
