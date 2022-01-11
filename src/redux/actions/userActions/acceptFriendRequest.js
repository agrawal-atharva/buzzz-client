import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const acceptRequest =
	(currentUserId, acceptUserId) => async (dispatch) => {
		const response = await axios.put(`/user/${currentUserId}/accept`, {
			acceptUserId,
		});
		console.log('Response B' , response);
		dispatch({ type: ActionType.ACCEPT_REQUEST, payload: response.data });
	};
