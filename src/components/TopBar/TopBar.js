import React from 'react';
import classes from './TopBar.module.css';
import { Person, Chat } from '@material-ui/icons';
import profileLogo from '/home/atharva/buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import headerLogo from '/home/atharva/buzzz/buzzz/src/TO-THE-NEW-logo.jpg';

const TopBar = (props) => {
	return (
		<div className={classes.topBarContainer}>
			<div className={classes.topBarLeft}>
				<img src={headerLogo} alt='TTN' className={classes.logo}></img>
			</div>
			<div className={classes.topBarRight}>
				<div className={classes.topBarProfile}>
					<img src={profileLogo} alt='face' className={classes.topBarImg}></img>
					<span className={classes.topBarName}>Atharva Agrawal</span>
				</div>
				<div className={classes.topBarIcons}>
					<div className={classes.topBarIconItem}>
						<Person />
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
