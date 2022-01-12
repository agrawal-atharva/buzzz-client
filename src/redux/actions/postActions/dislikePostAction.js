import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const disLikePost = (postId, userId) => async (dispatch) => {
	const response = await axios.put(`/post/dislike/${postId}`, {
		userId,
	});
	console.log('dislike Post response :', response);
	dispatch({ type: ActionType.DISLIKE_POST, payload: response });
};
