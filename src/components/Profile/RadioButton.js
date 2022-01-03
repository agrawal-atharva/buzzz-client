import React from 'react';
import './RadioButton.css';

function RadioButton(props) {
	return (
		<div class='container'>
			<input type='radio' id='male' checked='checked' name='radio' />
			<label for='male'>Male</label>
			<input type='radio' id='female' name='radio' />
			<label for='female'>Female</label>
		</div>
	);
}

export default RadioButton;
