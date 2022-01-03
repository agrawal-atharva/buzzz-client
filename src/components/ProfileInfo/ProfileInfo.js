import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from '../../redux/actions/userActions/currentUserAction.js.js';
import classes from './ProfileInfo.module.css';
import coverPhoto from '/home/atharva/buzzz/buzzz/src/Natural-Facebook-Cover-Photo.jpg';
import profileLogo from '/home/atharva/buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';

function ProfileInfo() {
	const userId = useSelector((state) => state.currentUser.currentUser._id);
	console.log('UserId', userId);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(currentUser());
	}, []);
	return (
		<div className={classes.profileInfoContainer}>
			<div className={classes.profileImgContainer}>
				<img
					className={classes.profileCoverImg}
					src={coverPhoto}
					alt='profile'
				></img>
				<img
					className={classes.profileDisplayImg}
					src={profileLogo}
					alt='display'
				></img>
			</div>
			<div className={classes.profileText}>
				<h5 className={classes.profileName}>Atharva</h5>
				<h6 className={classes.profileRole}>Newly Recruit at TTN</h6>
			</div>
			<div className={classes.profilePostContainer}>
				<div className={classes.profilePostItems}>
					<h4 className={classes.postViewCount}>238</h4>
					<h6 className={classes.postViewText}>Post Views</h6>
				</div>
				<div className={classes.profilePostItems}>
					<h4 className={classes.postViewCount}>10</h4>
					<h6 className={classes.postViewText}>Posts</h6>
				</div>
			</div>
		</div>
	);
}

export default ProfileInfo;
