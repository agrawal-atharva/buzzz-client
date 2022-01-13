import { ActionType } from '../../contants/actionTypes';

const initialSate = [];
export const getAllCommentsReducer = (
	state = initialSate,
	{ type, payload }
) => {
	switch (type) {
		case ActionType.GET_ALL_COMMENTS:
			return {
				...state,
				allComments: payload,
			};
		default:
			return state;
	}
};
