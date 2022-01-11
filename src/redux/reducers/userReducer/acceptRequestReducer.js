import { ActionType } from '../../contants/actionTypes';

const initialSate = [];
export const acceptRequestReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.ACCEPT_REQUEST:
			return { ...state, acceptRequest: payload };
		default:
			return state;
	}
};
