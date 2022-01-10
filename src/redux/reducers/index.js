import { combineReducers } from 'redux';
import { getAllPostReducer } from './postReducer/getAllPostReducer';
import { addFriendReducer } from './userReducer/addFriendReducer';
import { contactUserReducer } from './userReducer/contactUserReducer';
import { currentUserReducer } from './userReducer/currentUserReducer';
import { showAllRequest } from './userReducer/showAllRequestReducer';
import { suggestionUsersReducer } from './userReducer/suggestionUserReducer';

const rootReducer = combineReducers({
	currentUser: currentUserReducer,
	suggestionUsers: suggestionUsersReducer,
	contactUsers: contactUserReducer,
	addFriends: addFriendReducer,
	getAllPosts: getAllPostReducer,
	showAllRequest: showAllRequest,
});

export default rootReducer;
