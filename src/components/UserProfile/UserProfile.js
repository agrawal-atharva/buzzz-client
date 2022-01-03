import React from 'react';
import { useDispatch } from 'react-redux';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HttpIcon from '@mui/icons-material/Http';
import { Button } from '@mui/material';
import classes from './UserProfile.module.css';
import coverPhoto from '/home/atharva/Buzzz/client/buzzz/src/nature-design.jpg';
import { userProfile } from '../../redux/actions/userActions/userProfile';
import { useDispatch } from 'react-redux';

function UserProfile(props) {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userProfile());
	}, []);
	console.log('SuggestedUser', suggested_user);
	return (
		<div className={classes.profileContainer}>
			<div className={classes.imgContainer}>
				<img className={classes.coverImg} src={coverPhoto} alt='cover'></img>
				<img className={classes.profileImg} alt='prof'></img>
			</div>
			<div className={classes.profileInfoContainer}>
				<h3 className={classes.profileName}>Atharva Agrawal</h3>
				<h5 className={classes.profileDesignantion}>
					Atharva Agrawal is co-founder and COO of video ad tech company.
				</h5>
				<div className={classes.profileAddressContainer}>
					<span className={classes.profileAddress}>London</span>
					<span className={classes.profileAddress}>.</span>
					<span className={classes.profileAddress}>England</span>
					<span className={classes.profileAddress}>.</span>
					<span className={classes.profileAddress}>United Kingdom</span>
					<span className={classes.profileAddress}>.</span>
					<span className={classes.profileAddress}>187 friends</span>
				</div>
				<div className={classes.buttonContainer}>
					<Button
						className={classes.addFriend}
						startIcon={<PersonAddIcon />}
						variant='contained'
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
