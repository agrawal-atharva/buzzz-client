import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Posts.module.css';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import PendingIcon from '@mui/icons-material/Pending';
import postImg from '/home/atharva/Buzzz/buzzz/src/post.jpg';
import profileLogo from '/home/atharva/Buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';
import { getAllPost } from '../../redux/actions/postActions/getAllPostsAction';
import { Avatar } from '@mui/material';
import { likePost } from '../../redux/actions/postActions/likePostAction';
import { getSinglePost } from '../../redux/actions/postActions/getSinglePostAction';

const Posts = (props) => {
	const currentUser = useSelector((state) => state.currentUser.currentUser);
	const singlePost = useSelector((state) => state.getSinglePost);
	console.log('Single Post', singlePost);
	// const postLikes = singlePost.likes.length;
	const { _id, profilePicture } = currentUser;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllPost(_id));
	}, [_id]);
	const allPost = useSelector((state) => state.getAllPosts.posts);
	console.log('All Post', allPost);

	const likePostHandler = (postId) => {
		dispatch(likePost(postId, _id));
	};

	const showLikeHandler = (postId) => {
		console.log('postID', postId);
		dispatch(getSinglePost(postId));
	};

	return allPost.map((item) => {
		const { img, comments, like, userId, createdAt, desc } = item;
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
						<img src={postImg} alt='post' className={classes.postImg}></img>
					</div>
					<div className={classes.postActionConatiner}>
						<RecommendIcon
							className={classes.postActionIconLike}
						></RecommendIcon>
						<p
							className={classes.postActionCount}
							onLoad={() => {
								showLikeHandler(item._id);
							}}
						>
							{/* {postLikes} */}
						</p>
						<FavoriteIcon
							className={classes.postActionIconHeart}
						></FavoriteIcon>
						<p className={classes.postActionCount}>342</p>
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
							onClick={likePostHandler(item._id)}
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
				</div>
			</Fragment>
		);
	});
};

export default Posts;
