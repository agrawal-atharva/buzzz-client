import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
	display: 'none',
});

const UploadButtons = (props) => {
	const [previewSource, setPreviewSource] = useState();
	const handlefileInputChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();
		console.log(reader);
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setPreviewSource(reader.result);
		};
		console.log(previewSource);
		props.imgUrl(previewSource);
	};

	return (
		<Stack direction='row' alignItems='center' spacing={2} alignSelf='center'>
			<label htmlFor='contained-button-file'>
				<Input
					accept='image/*'
					id='contained-button-file'
					multiple
					type='file'
					onChange={handlefileInputChange}
				/>
				<Button
					variant='contained'
					component='span'
					sx={{ bgcolor: '#b19f9e' }}
				>
					Upload
				</Button>
			</label>
			<label htmlFor='icon-button-file'>
				<Input accept='image/*' id='icon-button-file' type='file' />
				<IconButton
					color='primary'
					aria-label='upload picture'
					component='span'
					sx={{ color: '#b19f9e' }}
				>
					<PhotoCamera />
				</IconButton>
			</label>
		</Stack>
	);
};

export default UploadButtons;
