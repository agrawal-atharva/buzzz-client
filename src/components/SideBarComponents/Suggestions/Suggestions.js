import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import classes from '../Contacts/Contacts.module.css';
import { suggestedUsers } from '../../../redux/actions/userActions/suggestionUserAction';
import profileLogo from '/home/atharva/buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import { userProfile } from '../../../redux/actions/userActions/userProfile';

const Suggestions = () => {
	const userId = useSelector((state) => state.currentUser.currentUser._id);
	const suggested_user = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(suggestedUsers(userId));
	}, []);
	console.log('SuggestedUser', suggested_user);

	const showProfileHandler = () => {
		dispatch(userProfile());
	};

	return (
		<div className={classes.contactContainer}>
			<div className={classes.contactHeader}>
				<span className={classes.contactHeaderText}>Suggestions</span>
				<SearchIcon className={classes.contactHeaderIcon}></SearchIcon>
			</div>
			<div className={classes.contactItemContainer}>
				<ul className={classes.contactItemListContainer}>
					<li className={classes.contactListItem} onClick={showProfileHandler}>
						<img
							src={profileLogo}
							alt='face'
							className={classes.contactImg}
						></img>
						<span className={classes.contactName}>Atharva Agrawal</span>
					</li>
					<li className={classes.contactListItem}>
						<img
							src={profileLogo}
							alt='face'
							className={classes.contactImg}
						></img>
						<span className={classes.contactName}>Atharva Agrawal</span>
					</li>
					<li className={classes.contactListItem}>
						<img
							src={profileLogo}
							alt='face'
							className={classes.contactImg}
						></img>
						<span className={classes.contactName}>Atharva Agrawal</span>
					</li>
					<li className={classes.contactListItem}>
						<img
							src={profileLogo}
							alt='face'
							className={classes.contactImg}
						></img>
						<span className={classes.contactName}>Atharva Agrawal</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Suggestions;
