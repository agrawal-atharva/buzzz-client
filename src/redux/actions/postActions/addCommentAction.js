import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const addComment = (postId, newComment) => async (dispatch) => {
	const response = await axios.put(`/post/comment/${postId}`, newComment);
	console.log('New Comment', response.data);
	dispatch({ type: ActionType.ADD_COMMENT, payload: response.data });
};
