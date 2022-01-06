import React from 'react';
import UserProfile from '../components/UserProfile/UserProfile';
import Suggestions from '../components/SideBarComponents/Suggestions/Suggestions';
import classes from './Profile.module.css';

function Profile(props) {
	return (
		<div className={classes.main}>
			<UserProfile />
			<Suggestions />
		</div>
	);
}

export default Profile;
