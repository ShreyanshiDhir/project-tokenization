import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { MUItheme } from "../../theme";
import { TextField, Box, Paper, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import laptop from "../../assets/images/laptop.png";
import Web3 from "web3";
const initialValues = {
	name: "",
	email: "",
};
let web3;
const Register = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isAuthenticated } = useSelector((state) => ({
		isAuthenticated: state.auth.isAuthenticated,
	}));
	const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser(values, web3, history));
	};

	useEffect(() => {
		if (isAuthenticated) history.push("/dashboard");
	}, [isAuthenticated, history]);

	return (
		<div
			elevation={3}
			style={{
				textAlign: "center",
				display: "flex",
				justifyContent: "center",
				marginTop: "2rem",
				marginBottom: "2rem",
			}}
		>
			{
				<form
					onSubmit={handleSubmit}
					style={{
						width: "auto",
						boxShadow: "3px 3px 11px -1px rgba(19,30,83,0.52",
						paddingRight: "4rem",
						paddingLeft: "4rem",
						borderRadius: "6px",
						backgroundColor: "white",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							width: "100%",
							color: "white",
						}}
					>
						<ThemeProvider>
							<h1 fontSize='2rem' mt='3rem'>
								<span style={{ color: "#003F87" }}>
									Come join us!
								</span>{" "}
							</h1>
							<img
								src={laptop}
								style={{ width: "22rem", height: "15rem" }}
							/>
							<TextField
								label='Name'
								size='small'
								variant='outlined'
								name='name'
								onChange={handleInputChange}
								value={values.name}
								style={{
									marginBottom: "1.2rem",
									marginTop: "2rem",
									backgroundColor: "white",
									borderRadius: "5px",
								}}
							/>

							<TextField
								label='Email address'
								variant='outlined'
								size='small'
								name='email'
								onChange={handleInputChange}
								value={values.email}
								style={{
									marginBottom: "1.2rem",
									backgroundColor: "white",
									borderRadius: "5px",
								}}
							/>

							<div style={{ display: "flex" }}>
								<Grid
									container
									style={{
										width: "100%",
										justifyContent: "center",
										marginBottom: "2rem",
									}}
								>
									<Grid item xs={12} md={7}>
										<Button
											type='submit'
											varient='outlined'
											style={{
												backgroundColor: "#00cccc",
												color: "white",
												opacity: "0.9",
												marginTop: "1rem",
												marginBottom: "1rem",
												width: "100%",
											}}
										>
											Submit
										</Button>
									</Grid>
								</Grid>
							</div>
						</ThemeProvider>
					</div>
				</form>
			}
		</div>
	);
};

export default Register;
