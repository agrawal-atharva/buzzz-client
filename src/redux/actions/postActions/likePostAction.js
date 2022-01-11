import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const likePost = (postId, userId) => async (dispatch) => {
	const response = await axios.put(`/post/like/${postId}`, {
		userId,
	});
	console.log('Like Post response :', response);
	dispatch({ type: ActionType.LIKE_POST, payload: response });
};
