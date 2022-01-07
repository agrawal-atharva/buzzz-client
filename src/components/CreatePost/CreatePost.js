import React from 'react';
import profileLogo from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import classes from './CreatePost.module.css';
import FormDialog from './FormDialog';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

const CreatePost = (props) => {
	const currentUser = useSelector((state) => state.currentUser.currentUser);
	const { profilePicture } = currentUser;
	return (
		<div className={classes.postBarContainer}>
			<div className={classes.postBarItems}>
				<Avatar
					src={profilePicture || profileLogo}
					alt=''
					className={classes.avatar}
				/>
				<input
					type='text'
					className={classes.postBarInput}
					placeholder=' Start a post...'
				></input>
			</div>
			<div className={classes.postBarIcon}>
				<FormDialog />
			</div>
		</div>
	);
};

export default CreatePost;
