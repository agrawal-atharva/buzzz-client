import React from 'react';
import profileLogo from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import classes from './CreatePost.module.css';
import FormDialog from './FormDialog';

const CreatePost = (props) => {
	return (
		<div className={classes.postBarContainer}>
			<div className={classes.postBarItems}>
				<img src={profileLogo} alt='face' className={classes.postBarImg}></img>
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
