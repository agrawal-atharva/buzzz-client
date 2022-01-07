import React from 'react';
import Suggestions from '../components/SideBarComponents/Suggestions/Suggestions';
import ImageContainer from '../components/Profile/ImageContainer';
import classes from './SelfProfile.module.css';
import ProfileForm from '../components/Profile/ProfileForm';

const Profile = (props) => {
	return (
		<div className={classes.main}>
			<div className={classes.leftContainer}>
				<ImageContainer />
				<ProfileForm />
			</div>
			<Suggestions />
		</div>
	);
};

export default Profile;
