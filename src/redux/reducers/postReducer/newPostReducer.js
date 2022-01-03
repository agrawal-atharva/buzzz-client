import { ActionType } from '../../contants/actionTypes';

const initialSate = {};
export const postReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.CREATE_NEW_POST:
			return { ...state, newPost: payload };
		default:
			return state;
	}
};
