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

const Posts = (props) => {
	const userId = useSelector((state) => state.currentUser.currentUser._id);
	// console.log('UserID', userId);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAllPost(userId));
	}, [userId]);
	const allPost = useSelector((state) => state.getAllPosts.posts);
	console.log('All Post', allPost);
	// return <h1>Hi</h1>;

	return allPost.map((item) => {
		const { img, comments, like, userId, createdAt, desc } = item;
		return (
			<Fragment key={item._id}>
				<div className={classes.postContainer}>
					<div className={classes.postUserContainer}>
						<img
							className={classes.postProfileIcon}
							src={profileLogo}
							alt='profile'
						></img>
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
						<p className={classes.postActionCount}>238</p>
						<FavoriteIcon
							className={classes.postActionIconHeart}
						></FavoriteIcon>
						<p className={classes.postActionCount}>342</p>
					</div>
					<hr />
					<div className={classes.postActionItemsContainer}>
						<ThumbUpIcon className={classes.postActionItem} />
						<span className={classes.postActionItemIcons}>Like</span>
						<ThumbDownIcon className={classes.postActionItem} />
						<span className={classes.postActionItemIcons}>DisLike</span>
						<CommentIcon className={classes.postActionItem} />
						<span className={classes.postActionItemIcons}>Comment</span>
					</div>
					<hr />
					<div className={classes.postCommentConatiner}>
						<img
							className={classes.commentImgIcon}
							src={profileLogo}
							alt='comment icon'
						></img>
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
