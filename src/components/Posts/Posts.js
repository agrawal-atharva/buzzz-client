import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Posts.module.css';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PendingIcon from '@mui/icons-material/Pending';
import postImg from '/home/atharva/Buzzz/buzzz/src/post.jpg';
import profileLogo from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import { getAllPost } from '../../redux/actions/postActions/getAllPostsAction';
import { addComment } from '../../redux/actions/postActions/addCommentAction';
import { Avatar } from '@mui/material';
import { likePost } from '../../redux/actions/postActions/likePostAction';
import { disLikePost } from '../../redux/actions/postActions/dislikePostAction';
import FolderList from './Comments';

const Posts = (props) => {
	const [commentText, setCommentText] = useState('');
	const currentUser = useSelector((state) => state.currentUser.currentUser);
	const { _id, profilePicture } = currentUser;
	const dispatch = useDispatch();
	useEffect(() => {
		if (_id) {
			dispatch(getAllPost(_id));
		}
	}, [_id, dispatch]);
	const allPost = useSelector((state) => state.getAllPosts.posts);

	const likePostHandler = (postId) => {
		if (postId && _id) {
			dispatch(likePost(postId, _id));
		}
	};

	const disLikePostHandler = (postId) => {
		if (postId && _id) {
			dispatch(disLikePost(postId, _id));
		}
	};

	const addCommentHandler = (event) => {
		setCommentText(event.target.value);
	};

	const commentSubmitHandler = (postId, userId) => {
		const newComment = {
			text: commentText,
			postedBy: userId,
		};
		dispatch(addComment(postId, newComment));
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		setCommentText('');
	};

	return allPost.map((item) => {
		const {
			img,
			likes,
			dislikes,
			userId,
			createdAt,
			desc,
			comments,
			displayPic,
		} = item;
		const postDate = createdAt.split('T');
		return (
			<Fragment key={item._id}>
				<div className={classes.postContainer}>
					<div className={classes.postUserContainer}>
						<Avatar
							src={displayPic || profileLogo}
							alt=''
							className={classes.avatar}
						/>
						<div className={classes.postProfileInfoContainer}>
							<h5 className={classes.postProfileName}>{userId.username}</h5>
							<p className={classes.postProfileDate}>
								Posted on: {postDate[0]}
							</p>
						</div>
						<PendingIcon className={classes.pendingIcon} />
					</div>
					<div className={classes.postContentContainer}>
						<p className={classes.postDescription}>{desc}</p>
						<img
							src={img || postImg}
							alt='post'
							className={classes.postImg}
						></img>
					</div>
					<div className={classes.postActionConatiner}>
						<ThumbUpOffAltIcon
							className={classes.postActionIconLike}
						></ThumbUpOffAltIcon>
						<p className={classes.postActionCount}>{likes?.length}</p>
						<ThumbDownOffAltIcon
							className={classes.postActionIconHeart}
						></ThumbDownOffAltIcon>
						<p className={classes.postActionCount}>{dislikes?.length}</p>
					</div>
					<hr />
					<div className={classes.postActionItemsContainer}>
						<div
							className={classes.container}
							onClick={() => {
								likePostHandler(item._id);
							}}
						>
							<ThumbUpIcon
								sx={{ color: 'white' }}
								className={classes.postActionItem}
							/>
							<span className={classes.postActionItemIcons}>Like</span>
						</div>
						<div
							className={classes.container}
							onClick={() => {
								disLikePostHandler(item._id);
							}}
						>
							<ThumbDownIcon
								sx={{ color: 'white' }}
								className={classes.postActionItem}
							/>
							<span className={classes.postActionItemIcons}>DisLike</span>
						</div>
					</div>
					<hr />
					<form
						onSubmit={formSubmitHandler}
						className={classes.postCommentConatiner}
					>
						<Avatar
							src={profilePicture || profileLogo}
							alt=''
							className={classes.avatar}
						/>
						<input
							onChange={addCommentHandler}
							value={commentText}
							className={classes.commentInput}
							placeholder='Write a comment'
						></input>
						<button
							className={classes.submitButton}
							onClick={() => {
								commentSubmitHandler(item._id, _id);
							}}
						>
							Submit
						</button>
					</form>
					<hr />
					{comments.length > 0 && <FolderList postComments={comments} />}
				</div>
			</Fragment>
		);
	});
};

export default Posts;
