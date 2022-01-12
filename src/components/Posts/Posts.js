import React, { Fragment, useEffect } from 'react';
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
import { Avatar } from '@mui/material';
import { likePost } from '../../redux/actions/postActions/likePostAction';
import { disLikePost } from '../../redux/actions/postActions/dislikePostAction';
import ThumbDownOffAlt from '@mui/icons-material/ThumbDownOffAlt';

const Posts = (props) => {
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

	return allPost.map((item) => {
		const { img, likes, dislikes, userId, createdAt, desc } = item;
		return (
			<Fragment key={item._id}>
				<div className={classes.postContainer}>
					<div className={classes.postUserContainer}>
						<Avatar
							src={profilePicture || profileLogo}
							alt=''
							className={classes.avatar}
						/>
						<div className={classes.postProfileInfoContainer}>
							<h5 className={classes.postProfileName}>{userId.username}</h5>
							<p className={classes.postProfileDate}>{createdAt}</p>
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
						<ThumbDownOffAlt
							className={classes.postActionIconHeart}
						></ThumbDownOffAlt>
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
							<ThumbUpIcon className={classes.postActionItem} />
							<span className={classes.postActionItemIcons}>Like</span>
						</div>
						<div
							className={classes.container}
							onClick={() => {
								disLikePostHandler(item._id);
							}}
						>
							<ThumbDownIcon className={classes.postActionItem} />
							<span className={classes.postActionItemIcons}>DisLike</span>
						</div>
					</div>
					<hr />
					<div className={classes.postCommentConatiner}>
						<Avatar src={profileLogo} alt='' className={classes.avatar} />
						<input
							className={classes.commentInput}
							placeholder='Write a comment'
						></input>
					</div>
					<div className={classes.loadCommentContainer}></div>
				</div>
			</Fragment>
		);
	});
};

export default Posts;
