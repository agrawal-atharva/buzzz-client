import React from 'react';
import CreatePost from '../components/CreatePost/CreatePost';
import TopBar from '../components/TopBar/TopBar';
import Contacts from '../components/SideBarComponents/Contacts/Contacts';
import Suggestions from '../components/SideBarComponents/Suggestions/Suggestions';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import Posts from '../components/Posts/Posts';
import Shortcut from '../components/Shortcuts/Shortcut';
import classes from './Feed.module.css';

const Feed = () => {
	return (
		<div className={classes.fragment}>
			<TopBar />
			<div className={classes.main}>
				<div className={classes.leftContainer}>
					<ProfileInfo />
					<Shortcut />
				</div>
				<div className={classes.middleContainer}>
					<CreatePost />
					<Posts  />
				</div>
				<div className={classes.rightContainer}>
					<Contacts />
					<Suggestions />
				</div>
			</div>
		</div>
	);
};

export default Feed;
