import { ActionType } from '../../contants/actionTypes';

const initialSate = { posts: [] };
export const disLikePostReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.DISLIKE_POST:
			return {
				...state,
				disLikePost: payload,
			};
		default:
			return state;
	}
};
