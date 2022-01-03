import { combineReducers } from 'redux';
import { currentUserReducer } from './userReducer/currentUserReducer';
import { suggestionUsers } from './userReducer/suggestionUserReducer';

const rootReducer = combineReducers({
	currentUser: currentUserReducer,
	suggestionUsers: suggestionUsers,
});

export default rootReducer;
