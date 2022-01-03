import React from 'react';
import CreatePost from './CreatePost/CreatePost';
import TopBar from './TopBar/TopBar';
import Contacts from './SideBarComponents/Contacts/Contacts';
import Suggestions from './SideBarComponents/Suggestions/Suggestions';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Posts from './Posts/Posts';
import Shortcut from './Shortcuts/Shortcut';
import classes from './Feed.module.css';
// import Profile from './Profile';

const Feed = (props) => {
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
					<p>Sort by</p>
					<Posts />
					<Posts />
				</div>
				<div className={classes.rightContainer}>
					<Contacts />
					<Suggestions />
				</div>
			</div>
			{/* <Profile /> */}
		</div>
	);
};

export default Feed;
