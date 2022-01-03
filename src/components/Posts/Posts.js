import React from 'react';
import classes from './Posts.module.css';
import RecommendIcon from '@mui/icons-material/Recommend';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import PendingIcon from '@mui/icons-material/Pending';
import postImg from '/home/atharva/buzzz/buzzz/src/post.jpg';
import profileLogo from '/home/atharva/buzzz/buzzz/src/aeecc22a67dac7987a80ac0724658493.jpg';

function Posts(props) {
	return (
		<div className={classes.postContainer}>
			<div className={classes.postUserContainer}>
				<img
					className={classes.postProfileIcon}
					src={profileLogo}
					alt='profile'
				></img>
				<div className={classes.postProfileInfoContainer}>
					<h5 className={classes.postProfileName}>Atharva Agrawal</h5>
					<p className={classes.postProfileDate}>December 27, 2021</p>
				</div>
				<PendingIcon className={classes.pendingIcon} />
			</div>
			<div className={classes.postContentContainer}>
				<p className={classes.postDescription}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s
				</p>
				<img src={postImg} alt='post' className={classes.postImg}></img>
			</div>
			<div className={classes.postActionConatiner}>
				<RecommendIcon className={classes.postActionIconLike}></RecommendIcon>
				<p className={classes.postActionCount}>238</p>
				<FavoriteIcon className={classes.postActionIconHeart}></FavoriteIcon>
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
	);
}

export default Posts;
