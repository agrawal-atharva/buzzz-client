import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './FriendListDialog.module.css';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import { Person } from '@material-ui/icons';
import { Button } from '@mui/material';
import { acceptRequest } from '../../redux/actions/userActions/acceptFriendRequest';
import { rejectRequest } from '../../redux/actions/userActions/rejectRequestAction';

function SimpleDialog(props) {
	const dispatch = useDispatch();
	const currentUserId = useSelector(
		(state) => state.currentUser.currentUser._id
	);
	const allRequest = useSelector((state) => state.showAllRequest.allRequest);
	const { onClose, open } = props;

	const handleClose = () => {
		onClose();
	};

	const handleListItemClick = (value) => {
		onClose();
	};

	const acceptRequestHandler = (acceptUserId) => {
		if (currentUserId && acceptUserId) {
			dispatch(acceptRequest(currentUserId, acceptUserId));
		}
	};

	const rejectRequestHandler = (rejectUserId) => {
		if (currentUserId && rejectUserId) {
		}
		dispatch(rejectRequest(currentUserId, rejectUserId));
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle className={classes.dialogTitle}>Friend Request</DialogTitle>
			<List sx={{ pt: 0 }}>
				{allRequest.map((request) => (
					<ListItem
						onClick={() => handleListItemClick(request)}
						key={request.id}
					>
						<ListItemAvatar>
							<Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
								<Avatar src={request.profilePic || <PersonIcon />} />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={request.name} />
						<div className={classes.buttonContainer}>
							<Button
								variant='contained'
								style={{ backgroundColor: 'blue', height: '2rem' }}
								onClick={() => {
									acceptRequestHandler(request.id);
								}}
							>
								Accept
							</Button>
							<Button
								variant='contained'
								style={{ backgroundColor: 'red', height: '2rem' }}
								onClick={() => {
									rejectRequestHandler(request.id);
								}}
							>
								Reject
							</Button>
						</div>
					</ListItem>
				))}
			</List>
		</Dialog>
	);
}

SimpleDialog.propTypes = {
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	// selectedValue: PropTypes.string.isRequired,
};

export default function FriendListDialog() {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value) => {
		setOpen(false);
		// setSelectedValue(value);
	};

	return (
		<div>
			<Person onClick={handleClickOpen} />
			<SimpleDialog
				// selectedValue={selectedValue}
				open={open}
				onClose={handleClose}
			/>
		</div>
	);
}
