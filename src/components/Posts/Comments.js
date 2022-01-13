import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import profilePhoto from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';

export default function FolderList(props) {
	const comments = props.postComments;
	return comments.map((comment) => {
		const { createdAt } = comment;
		const date = createdAt.split('T');
		console.log(date);
		return (
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				<ListItem>
					<ListItemAvatar>
						<Avatar src={comment.img || profilePhoto}></Avatar>
					</ListItemAvatar>
					<ListItemText primary={comment.text} secondary={date[0]} />
				</ListItem>
			</List>
		);
	});
}
