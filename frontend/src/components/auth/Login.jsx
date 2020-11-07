import React, { useState, useEffect } from "react";
import "./Login.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { login, metaMaskLogin } from "../../store/auth";
import { useHistory } from "react-router-dom";
import Web3 from "web3";
import Axios from "axios";
import API from "../../api/api";
import Grid from '@material-ui/core/Grid';
let web3; // Will hold the web3 instance
const Login = (props) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isAuthenticated } = useSelector(
		(state) => ({ isAuthenticated: state.auth.isAuthenticated }),
		shallowEqual
	);
	const onSubmit = async (e) => {
		e.preventDefault();
		dispatch(metaMaskLogin(web3, history));
	};
	useEffect(() => {
		if (isAuthenticated) history.push("/dashboard");
	}, [isAuthenticated, history]);
	return (
		<div id="mainBox">

			<div id="wrapper">
				<div id="heading">
					<h1>Welcome Back</h1>
				</div>
				<div id="signin">
				<form role='form' onSubmit={(e) => onSubmit(e)}>
						<div class="form-group">
							<input type="submit" name='login' value="Log In" />
						</div>
					</form>
				</div>
			</div>
			
		</div>
	)
}

export default Login
