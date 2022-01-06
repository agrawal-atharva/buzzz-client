import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { FormControlUnstyledContext } from '@mui/material';

const Input = styled('input')({
	display: 'none',
});

const UploadButtons = (props) => {
	const [fileInputState, setFileInputState] = useState('');
	const [selectedFile, setSelectedFile] = useState();

	const imageHandler = (event) => {
		const file = event.target.files[0];
		console.log(file);
		const readFile = new FileReader();

		console.log('Result1', readFile.readAsDataURL(file));
		readFile.addEventListener(
			'load',
			function () {
				// convert image file to base64 string
				setSelectedFile(readFile.result);
				console.log('Result2', readFile.result);
				props.postImg(readFile.result);
			},
			false
		);
		// if (selectedFile) {
		// 	readFile.readAsDataURL(selectedFile);
		// }
	};
	return (
		<Stack direction='row' alignItems='center' spacing={2} alignSelf='center'>
			<label htmlFor='contained-button-file'>
				<Input
					accept='image/*'
					id='contained-button-file'
					multiple
					type='file'
					onChange={imageHandler}
					value={fileInputState}
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
					onChange={imageHandler}
					value={fileInputState}
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
