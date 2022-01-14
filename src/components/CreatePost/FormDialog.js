import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewPost } from '../../redux/actions/postActions/postActions';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import classes from './CreatePost.module.css';
import FullWidthTextField from './FullWidthTextField.js';
import UploadButtons from './UploadButtons';

const FormDialog = () => {
	const id = useSelector((state) => state.currentUser.currentUser._id);
	const [post, setPost] = useState({ userId: '', desc: '', img: '' });
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		dispatch(createNewPost({ ...post, userId: id }));
	};

	const postDescHandler = (props) => {
		setPost({ ...post, desc: props });
	};

	const postImgHandler = (props) => {
		console.log(props);
		setPost({ ...post, img: props });
	};

	return (
		<div>
			<Button
				variant='text'
				className={classes.buttonContainer}
				onClick={handleClickOpen}
			>
				<PhotoLibraryIcon className={classes.postBarIconItem} />
				<span className={classes.postBarIconText}>Photo</span>
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle alignSelf='center'>New Post</DialogTitle>
				<FullWidthTextField postDesc={postDescHandler} />
				<UploadButtons imgUrl={postImgHandler} />
				<DialogActions>
					<Button onClick={handleClose} sx={{color: '#b19f9e'}}>Cancel</Button>
					<Button onClick={handleClose} sx={{color: '#b19f9e'}}>Post</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default FormDialog;
