import { ActionType } from '../../contants/actionTypes';

const initialSate = {
	suggestionUsers: [],
};
export const suggestionUsersReducer = (
	state = initialSate,
	{ type, payload }
) => {
	switch (type) {
		case ActionType.GET_SUGGESTED_USER:
			return { ...state, suggestionUsers: payload };
		default:
			return state;
	}
};
