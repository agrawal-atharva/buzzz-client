import axios from '../../../axios';
import { ActionType } from '../../contants/actionTypes';

export const createNewPost = (newPost) => async (dispatch) => {
	const response = await axios.post('/post', newPost).catch((err) => {
		console.log(err);
	});
	console.log('Post response :', response);
	dispatch({ type: ActionType.CREATE_NEW_POST, payload: response });
};
