import React from 'react';
import { useSelector } from 'react-redux';
import classes from './ImageContainer.module.css';
import coverPhoto from '/home/atharva/Buzzz/buzzz/src/nature-design.jpg';
import profilePhoto from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';

function ImageContainer(props) {
	const currentUser = useSelector((state) => state.currentUser.currentUser);
	const { profilePicture } = currentUser;
	return (
		<div className={classes.imgContainer}>
			<img className={classes.coverImg} src={coverPhoto} alt='cover'></img>
			<img
				className={classes.profileImg}
				src={profilePicture || profilePhoto}
				alt='prof'
			></img>
		</div>
	);
}

export default ImageContainer;
