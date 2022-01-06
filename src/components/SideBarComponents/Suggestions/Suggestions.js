import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import classes from '../Contacts/Contacts.module.css';
import { suggestedUsers } from '../../../redux/actions/userActions/suggestionUserAction';
import profileLogo from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import { Link } from 'react-router-dom';

const Suggestions = () => {
	const userId = useSelector((state) => state.currentUser.currentUser._id);
	// const [currentUserId, setCurrentUserId] = useState('');
	// setCurrentUserId(userId);
	const suggested_user = useSelector(
		(state) => state.suggestionUsers.suggestionUsers
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(suggestedUsers(userId));
	}, [userId]);
	console.log(
		'SuggestedUser',
		suggested_user.map((user) => {
			const filterArray = { img: user.profilePicture, name: user.username };
			return filterArray;
		})
	);

	const filteredSuggestedArray = suggested_user.map((user) => {
		const filterArray = {
			_id: user._id,
			profilePicture: user.profilePicture,
			username: user.username,
		};
		return filterArray;
	});

	// const showProfileHandler = (id) => {
	// 	dispatch(userProfile(id));
	// };

	return (
		<div className={classes.contactContainer}>
			<div className={classes.contactHeader}>
				<span className={classes.contactHeaderText}>Suggestions</span>
				<SearchIcon className={classes.contactHeaderIcon}></SearchIcon>
			</div>
			<div className={classes.contactItemContainer}>
				<ul className={classes.contactItemListContainer}>
					{filteredSuggestedArray.map((item) => {
						console.log(item);
						return (
							<li className={classes.contactListItem} key={item._id}>
								<Link to={`/userProfile/${item._id}/${userId}`}>
									<img
										src={item.profilePicture || profileLogo}
										alt='face'
										className={classes.contactImg}
									></img>
									<span className={classes.contactName}>{item.username}</span>
								</Link>
							</li>
						);
					})}
					{/* <li className={classes.contactListItem} onClick={showProfileHandler}>
						<img
							src={profileLogo}
							alt='face'
							className={classes.contactImg}
						></img>
						<span className={classes.contactName}>Atharva Agrawal</span>
					</li> */}
					{/* <li className={classes.contactListItem}>
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
					</li> */}
				</ul>
			</div>
		</div>
	);
};

export default Suggestions;
