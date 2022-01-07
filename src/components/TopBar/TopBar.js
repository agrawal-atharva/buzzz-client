import React from 'react';
import classes from './TopBar.module.css';
import { Link } from 'react-router-dom';
import { Chat } from '@material-ui/icons';
import profileLogo from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import headerLogo from '/home/atharva/Buzzz/buzzz/src/TO-THE-NEW-logo.jpg';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import FriendListDialog from '../FriendListDialog/FriendListDialog';

const TopBar = (props) => {
	const currentUser = useSelector((state) => state.currentUser.currentUser);
	const { profilePicture, username, _id } = currentUser;
	return (
		<div className={classes.topBarContainer}>
			<div className={classes.topBarLeft}>
				<img src={headerLogo} alt='TTN' className={classes.logo}></img>
			</div>
			<div className={classes.topBarRight}>
				<Link className={classes.linkToProfile} to={`/selfProfile/${_id}`}>
					<div className={classes.topBarProfile}>
						<Avatar src={profilePicture} alt='' className={classes.avatar} />
						<span className={classes.topBarName}>{username}</span>
					</div>
				</Link>
				<div className={classes.topBarIcons}>
					<div className={classes.topBarIconItem}>
						<FriendListDialog />
						<span className={classes.topBarIconBadge}>1</span>
					</div>
					<div className={classes.topBarIconItem}>
						<Chat />
						<span className={classes.topBarIconBadge}>1</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
