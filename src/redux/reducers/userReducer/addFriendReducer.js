import { ActionType } from '../../contants/actionTypes';

const initialSate = {
	addFriends: '',
};
export const addFriendReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.ADD_FRIEND:
			return { ...state, addFriends: payload };
		default:
			return state;
	}
};
