import { ActionType } from '../../contants/actionTypes';

const initialSate = { posts: [] };
export const likePostReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.LIKE_POST:
			return { ...state, likePost: payload };
		default:
			return state;
	}
};
