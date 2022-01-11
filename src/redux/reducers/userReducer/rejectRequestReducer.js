import { ActionType } from '../../contants/actionTypes';

const initialSate = [];
export const rejectRequestReducer = (
	state = initialSate,
	{ type, payload }
) => {
	switch (type) {
		case ActionType.REJECT_REQUEST:
			return { ...state, rejectRequest: payload };
		default:
			return state;
	}
};
