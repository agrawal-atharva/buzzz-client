import React from 'react';
import classes from './Profile.module.css';
import ProfileForm from './ProfileForm';

const Profile = (props) => {
	return <div className={classes.main}>
		<ProfileForm />
		<h1>Hi</h1>
	</div>;
};

export default Profile; 

