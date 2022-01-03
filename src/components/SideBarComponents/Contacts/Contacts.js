import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import classes from './Contacts.module.css';
import profileLogo from '/home/atharva/buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';

const Contacts = (props) => {
	return (
		<div className={classes.contactContainer}>
			<div className={classes.contactHeader}>
				<span className={classes.contactHeaderText}>Contacts</span>
				<SearchIcon className={classes.contactHeaderIcon}></SearchIcon>
			</div>
			<div className={classes.contactItemContainer}>
				<ul className={classes.contactItemListContainer}>
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

export default Contacts;
