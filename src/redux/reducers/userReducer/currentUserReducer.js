import { ActionType } from '../../contants/actionTypes';

const initialSate = { currentUser: { _id: '' } };
export const currentUserReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.GET_CURRENT_USER:
			return { ...state, currentUser: payload };
		default:
			return state;
	}
};
