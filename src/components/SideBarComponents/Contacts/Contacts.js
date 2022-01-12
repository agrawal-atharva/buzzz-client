import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import classes from './Contacts.module.css';
import profileLogo from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import { contactUser } from '../../../redux/actions/userActions/contactUsersAction';
import { Avatar, Divider } from '@mui/material';

const Contacts = (props) => {
	const userId = useSelector((state) => state.currentUser.currentUser._id);
	const dispatch = useDispatch();

	useEffect(() => {
		if (userId) {
			dispatch(contactUser(userId));
		}
	}, [userId, dispatch]);
	const contact_users = useSelector((state) => state.contactUsers.contactUsers);
	return (
		<div className={classes.contactContainer}>
			<div className={classes.contactHeader}>
				<span className={classes.contactHeaderText}>Contacts</span>
				<SearchIcon></SearchIcon>
			</div>
			<Divider />
			<div className={classes.contactItemContainer}>
				<ul className={classes.contactItemListContainer}>
					{contact_users.map((item) => {
						return (
							<li className={classes.contactListItem} key={item._id}>
								<Avatar
									src={item.pic || profileLogo}
									className={classes.avatar}
								/>
								<span className={classes.contactName}>{item.name}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Contacts;
