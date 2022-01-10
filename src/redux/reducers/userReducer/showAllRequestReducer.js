import { ActionType } from '../../contants/actionTypes';

const initialSate = {
	allRequest: [],
};
export const showAllRequest = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.SHOW_ALL_REQUEST:
			return { ...state, allRequest: payload };
		default:
			return state;
	}
};
