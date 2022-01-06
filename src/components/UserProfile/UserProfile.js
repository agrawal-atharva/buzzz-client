import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HttpIcon from '@mui/icons-material/Http';
import { Button } from '@mui/material';
import classes from './UserProfile.module.css';
import coverPhoto from '/home/atharva/Buzzz/buzzz/src/nature-design.jpg';
import profilePhoto from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import { userProfile } from '../../redux/actions/userActions/userProfile';
import { addFriend } from '../../redux/actions/userActions/addFriendAction';

function UserProfile(props) {
	const currentUser = useSelector((state) => state.currentUser.currentUser);
	const addFriend = useSelector((state) => state.addFriends);
	console.log('Add friends', addFriend);
	const { username, profilePicture, friends } = currentUser;
	const friendsCount = friends.length;
	const { profileId, currentUserId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userProfile(profileId));
	}, [profileId]);

	const addFriendHandler = () => {
		console.log('Coming here');
		dispatch(addFriend(profileId, currentUserId));
	};
	return (
		<div className={classes.profileContainer}>
			<div className={classes.imgContainer}>
				<img className={classes.coverImg} src={coverPhoto} alt='cover'></img>
				<img
					className={classes.profileImg}
					src={profilePicture}
					alt='prof'
				></img>
			</div>
			<div className={classes.profileInfoContainer}>
				<h3 className={classes.profileName}>{username}</h3>
				<h5 className={classes.profileDesignantion}>
					{username} is co-founder and COO of video ad tech company.
				</h5>
				<div className={classes.profileAddressContainer}>
					<span className={classes.profileAddress}>London</span>
					<span className={classes.profileAddress}>.</span>
					<span className={classes.profileAddress}>England</span>
					<span className={classes.profileAddress}>.</span>
					<span className={classes.profileAddress}>United Kingdom</span>
					<span className={classes.profileAddress}>.</span>
					<span className={classes.profileAddress}>{friendsCount} friends</span>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						className={classes.addFriend}
						startIcon={<PersonAddIcon />}
						variant='contained'
						onClick={addFriendHandler}
					>
						Add Friend
					</Button>
					<Button
						className={classes.visitWebsite}
						startIcon={<HttpIcon />}
						variant='outlined'
					>
						<span className={classes.websiteText}>Visit Website</span>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default UserProfile;
