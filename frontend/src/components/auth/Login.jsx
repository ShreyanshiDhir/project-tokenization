import React, { useState,useEffect } from "react";
import "./Login.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import {login} from '../../store/auth' 
import { useHistory } from "react-router-dom";
import {setToken} from '../../store/auth'
import Web3 from 'web3';
import Axios from "axios";
import API from "../../api/api";
let web3; // Will hold the web3 instance
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
	const onSubmit = async(e) => {
		e.preventDefault();
		// dispatch(login(formData));
		if (!web3) {
			try {
			  // Request account access if needed
			  await window.ethereum.enable();
	  
			  // We don't know window.web3 version, so we use our own instance of Web3
			  // with the injected provider given by MetaMask
			  web3 = new Web3(window.ethereum);
			} catch (error) {
			  window.alert('You need to allow MetaMask.');
			  return;
			}
		  }
		  const coinbase = await web3.eth.getCoinbase();
    if (!coinbase) {
      window.alert('Please activate MetaMask first.');
      return;
    }
	//
	const publicAddress = coinbase.toLowerCase();
	console.log(publicAddress);
	const res = await API.get("/api/user", {
		params: {
			publicAddress,
		},
	});
	console.log(res.data.user);
	let user = res.data.user;
	//handleSignup starts
	if(!user) {
		const body = JSON.stringify({
			publicAddress
		})
		user= await API.post("/api/user",body);
	}
	console.log(user);
	//handleSignature starts
	const signature = await web3.eth.personal.sign(`Nonce : ${user.nonce}`,publicAddress);
	console.log(signature);
	//handleAuthenticate starts
	const body = JSON.stringify({publicAddress, signature});
	const rr = await API.post('/api/auth/',body);
	console.log(rr)
	dispatch(setToken(rr.data.token));
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
