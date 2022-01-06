import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const addFriend = (profileId, currentUserId) => async (dispatch) => {
	const response = await axios.put(`/user/${profileId}/add/friend`, {
		userId: currentUserId,
	});
	console.log('Response', response);
	dispatch({ type: ActionType.ADD_FRIEND, payload: response.data });
};
