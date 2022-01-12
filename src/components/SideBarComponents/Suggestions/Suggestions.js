import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import classes from '../Contacts/Contacts.module.css';
import { suggestedUsers } from '../../../redux/actions/userActions/suggestionUserAction';
import profileLogo from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import { Link } from 'react-router-dom';
import { Avatar, Divider } from '@mui/material';

const Suggestions = () => {
	const userId = useSelector((state) => state.currentUser.currentUser._id);
	// const [currentUserId, setCurrentUserId] = useState('');
	// setCurrentUserId(userId);
	const suggested_user = useSelector(
		(state) => state.suggestionUsers.suggestionUsers
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (userId) {
			dispatch(suggestedUsers(userId));
		}
	}, [userId, dispatch]);

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
			<Divider />
			<div className={classes.contactItemContainer}>
				<ul className={classes.contactItemListContainer}>
					{filteredSuggestedArray.map((item) => {
						return (
							<li key={item._id}>
								<Link
									className={classes.contactListItem}
									to={`/userProfile/${item._id}/${userId}`}
								>
									<Avatar
										src={item.profilePicture || profileLogo}
										className={classes.avatar}
									/>
									<span className={classes.contactName}>{item.username}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Suggestions;
