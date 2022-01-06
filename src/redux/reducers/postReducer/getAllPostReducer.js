import { ActionType } from '../../contants/actionTypes';

const initialSate = { posts: [] };
export const getAllPostReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.GET_ALL_POST:
			return { ...state, posts: payload };
		default:
			return state;
	}
};
