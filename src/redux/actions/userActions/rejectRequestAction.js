import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const rejectRequest =
	(currentUserId, rejectUserId) => async (dispatch) => {
		const response = await axios.put(`/user/${currentUserId}/reject`, {
			rejectUserId,
		});
		console.log('Response A', response);
		dispatch({ type: ActionType.REJECT_REQUEST, payload: response.data });
	};
