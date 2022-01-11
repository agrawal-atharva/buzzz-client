import { ActionType } from '../../contants/actionTypes';

const initialSate = { posts: [] };
export const getSinglePostReducer = (
	state = initialSate,
	{ type, payload }
) => {
	switch (type) {
		case ActionType.GET_SINGLE_POST:
			return { ...state, posts: payload };
		default:
			return state;
	}
};
