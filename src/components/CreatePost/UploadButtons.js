import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
	display: 'none',
});

const UploadButtons = (props) => {
	const imageHandler = (event) => {
		props.postImg(event.target.files[0]);
	};
	return (
		<Stack direction='row' alignItems='center' spacing={2} alignSelf='center'>
			<label htmlFor='contained-button-file'>
				<Input
					accept='image/*'
					id='contained-button-file'
					multiple
					type='file'
					onInput={imageHandler}
				/>
				<Button variant='contained' component='span'>
					Upload
				</Button>
			</label>
			<label htmlFor='icon-button-file'>
				<Input
					accept='image/*'
					id='icon-button-file'
					type='file'
					onInput={imageHandler}
				/>
				<IconButton
					color='primary'
					aria-label='upload picture'
					component='span'
				>
					<PhotoCamera />
				</IconButton>
			</label>
		</Stack>
	);
};

export default UploadButtons;
