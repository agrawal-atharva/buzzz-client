import { ActionType } from '../../contants/actionTypes';

const initialSate = {};
export const addCommentReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.ADD_COMMENT:
			return {
				...state,
				addComment: payload,
			};
		default:
			return state;
	}
};
