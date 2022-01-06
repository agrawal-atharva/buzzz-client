import { ActionType } from '../../contants/actionTypes';

const initialSate = {
	contactUsers: [],
};
export const contactUserReducer = (state = initialSate, { type, payload }) => {
	switch (type) {
		case ActionType.GET_CONTACT_USER:
            
			return { ...state, contactUsers: payload };
		default:
			return state;
	}
};
