import React, { useState,useEffect } from "react";
import "./Login.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {login} from '../../store/auth' 
import { useHistory } from "react-router-dom";
const Login = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const {isAuthenticated} = useSelector(state => ({isAuthenticated : state.auth.isAuthenticated}),shallowEqual);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const { email, password } = formData;
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData));
	}

	useEffect(() => {
		if(isAuthenticated)
			history.push('/dashboard');
	}, [isAuthenticated,history]);
	return (
		<div className='box'>
			<h1 align='center'>Login</h1>
			<form role='form' onSubmit={e=>onSubmit(e)}>
				<div className='inputBox'>
					<input
						type='text'
						name='email'
						value={email}
						onChange={onChange}
						autoComplete='off'
						required
					/>
					<label>Email</label>
				</div>
				<div className='inputBox'>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						autoComplete='off'
						required
					/>
					<label>Password</label>
				</div>

				<input type='submit' name='login' value='Login' />
			</form>
		</div>
	);
};

Login.propTypes = {};

export default Login;
