import React, { useState, useEffect } from "react";
import "./Login.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login, metaMaskLogin } from "../../store/auth";
import { useHistory } from "react-router-dom";
import Web3 from "web3";
import Axios from "axios";
import API from "../../api/api";
let web3; // Will hold the web3 instance
const Login = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isAuthenticated } = useSelector(
		(state) => ({ isAuthenticated: state.auth.isAuthenticated }),
		shallowEqual
	);
	// const [formData, setFormData] = useState({
	// 	email: "",
	// 	password: "",
	// });
	// const onChange = (e) =>
	// 	setFormData({ ...formData, [e.target.name]: e.target.value });
	// const { email, password } = formData;
	const onSubmit = async (e) => {
		e.preventDefault();
		dispatch(metaMaskLogin(web3, history));

		//
	};

	useEffect(() => {
		if (isAuthenticated) history.push("/dashboard");
	}, [isAuthenticated, history]);
	return (
		<div className='box'>
			<h1 align='center'>Login</h1>
			<form role='form' onSubmit={(e) => onSubmit(e)}>
				<input type='submit' name='login' value='Login' />
			</form>
		</div>
	);
};

Login.propTypes = {};

export default Login;
