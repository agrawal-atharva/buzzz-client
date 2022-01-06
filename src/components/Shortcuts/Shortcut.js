import React from 'react';
import classes from './Shortcut.module.css';
import TagIcon from '@mui/icons-material/Tag';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CodeIcon from '@mui/icons-material/Code';
import { Divider } from '@mui/material';

function Shortcut(props) {
	return (
		<div className={classes.shortcutContainer}>
			<div className={classes.shortcutItem}>
				<h4 className={classes.shortcutItemHeading}>Recent</h4>
				<table className={classes.shortcutContentContainer}>
					<tr className={classes.contentRow}>
						<td>
							<TagIcon className={classes.contentIcons} />
						</td>
						<td className={classes.content}>#javascript</td>
					</tr>
					<tr className={classes.contentRow}>
						<td>
							<InsertInvitationIcon className={classes.contentIcons} />
						</td>
						<td className={classes.content}>Mobile Trends conference 2021</td>
					</tr>
					<tr className={classes.contentRow}>
						<td>
							<GroupIcon className={classes.contentIcons} />
						</td>
						<td className={classes.content}>Freelance Developers</td>
					</tr>
				</table>
				<div className={classes.showMoreContainer}>
					<select className={classes.select}></select>
					<span className={classes.selectText}>Show More</span>
				</div>
			</div>
			<Divider />
			<div className={classes.shortcutItem}>
				<h4 className={classes.shortcutItemHeading}>Groups</h4>
				<table className={classes.shortcutContentContainer}>
					<tr>
						<td>
							<TagIcon className={classes.contentIcons} />
						</td>
						<td className={classes.content}>#javascript</td>
					</tr>
					<tr>
						<td>
							<InsertInvitationIcon className={classes.contentIcons} />
						</td>
						<td className={classes.content}>Mobile Trends conference 2021</td>
					</tr>
					<tr>
						<td>
							<GroupIcon className={classes.contentIcons} />
						</td>
						<td className={classes.content}>Freelance Developer</td>
					</tr>
				</table>
				<div className={classes.showMoreContainer}>
					<select className={classes.select}></select>
					<span className={classes.selectText}>Show More</span>
				</div>
			</div>
			<Divider />
			<div className={classes.shortcutItem}>
				<h4 className={classes.shortcutItemHeading}>Subscription</h4>
				<table className={classes.shortcutContentContainer}>
					<tr>
						<td>
							<LightbulbIcon className={classes.contentIcons} />
						</td>
						<td>Programming with Mosh</td>
					</tr>
					<tr>
						<td>
							<CastForEducationIcon className={classes.contentIcons} />
						</td>
						<td>E-Learning bridge</td>
					</tr>
					<tr>
						<td>
							<CodeIcon className={classes.contentIcons} />
						</td>
						<td>Clever programmer</td>
					</tr>
				</table>
				<div className={classes.showMoreContainer}>
					<select className={classes.select}></select>
					<span className={classes.selectText}>Show More</span>
				</div>
			</div>
		</div>
	);
}

export default Shortcut;
