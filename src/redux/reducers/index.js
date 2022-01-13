import { combineReducers } from 'redux';
import { disLikePostReducer } from './postReducer/disLikePostReducer';
import { getAllPostReducer } from './postReducer/getAllPostReducer';
import { getSinglePostReducer } from './postReducer/getSinglePostReducer';
import { likePostReducer } from './postReducer/likePostReducer';
import { acceptRequestReducer } from './userReducer/acceptRequestReducer';
import { addFriendReducer } from './userReducer/addFriendReducer';
import { contactUserReducer } from './userReducer/contactUserReducer';
import { currentUserReducer } from './userReducer/currentUserReducer';
import { rejectRequestReducer } from './userReducer/rejectRequestReducer';
import { showAllRequestReducer } from './userReducer/showAllRequestReducer';
import { suggestionUsersReducer } from './userReducer/suggestionUserReducer';
import { addCommentReducer } from './postReducer/addCommentReducer';

const rootReducer = combineReducers({
	currentUser: currentUserReducer,
	suggestionUsers: suggestionUsersReducer,
	contactUsers: contactUserReducer,
	addFriends: addFriendReducer,
	getAllPosts: getAllPostReducer,
	showAllRequest: showAllRequestReducer,
	acceptRequest: acceptRequestReducer,
	rejectRequest: rejectRequestReducer,
	likePost: likePostReducer,
	disLikePost: disLikePostReducer,
	getSinglePost: getSinglePostReducer,
	addComment: addCommentReducer,
});

export default rootReducer;
