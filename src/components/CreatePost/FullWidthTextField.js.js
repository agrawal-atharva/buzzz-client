import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createNewPost } from '../../redux/actions/postActions/postActions';

const FullWidthTextField = (props) => {
	const captionHandler = (event) => {
		props.postDesc(event.target.value);
	};
	return (
		<Box
			sx={{
				width: 500,
				maxWidth: '90%',
				alignSelf: 'center',
			}}
		>
			<TextField
				fullWidth
				label='Caption'
				id='fullWidth'
				onBlur={captionHandler}
			/>
		</Box>
	);
};

export default FullWidthTextField;
