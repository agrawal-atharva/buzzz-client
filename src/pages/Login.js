import React from 'react';
import classes from './Login.module.css';
import axios from 'axios';
import logo from '/home/atharva/Buzzz/buzzz/src/TO-THE-NEW-logo.jpg';

const Login = (props) => {
	const signUpHandler = async () => {
		await axios.get('http://localhost:5000/auth/google');
	};

	return (
		<div className={classes.main}>
			<img className={classes.logo} src={logo} alt='logo' />
			<div className={classes.para1}>
				Enter your details and Start <br />
				your journey with us
			</div>
			<div className={classes.para2}>Don't stop until you are proud</div>

			<button className={classes.button} onClick={signUpHandler}>
				<a href='http://localhost:5000/auth/google'>Sign in with Google</a>
			</button>
		</div>
	);
};

export default Login;
