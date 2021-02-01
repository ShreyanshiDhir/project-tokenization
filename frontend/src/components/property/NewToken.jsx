import React, { useState, useEffect } from "react";

import Loader from "../layout/Loader";

import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth";
import { newToken } from "../../store/property";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { MUItheme } from "../../theme";
import { TextField, Box, Paper, ThemeProvider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import tokenization from "../../assets/images/tokeniztion.png";
import bg from "../../assets/images/img_joinus-1.png";

import Web3 from "web3";
const initialValues = {
	name: "",
	description: "",
	image: "",
	tokenValue: "",
	initialSupply: "",
	symbol: "",
};
let web3;
const NewToken = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { owner } = useSelector(
		(state) => ({ owner: state.auth.user._id })
	);
	const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(newToken({...values,owner}, web3, history));
	};

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
							<Grid container spacing={3}>
								{/* <Grid item xs={12} sm={6}>
									<img
										src={tokenization}
										style={{
											width: "28rem",
											height: "25rem",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											marginTop: "1rem",
										}}
									/>
								</Grid> */}

								<Grid item xs={12} sm={12}>
									<div style={{ width: "80%" }}>
										<h1 mt="1rem">
											<span
												style={{
													color: "#003F87",
													fontSize: "3rem",
													fontWeight: "bold",
												}}
											>
												Create New Token
											</span>{" "}
										</h1>

										<TextField
											label="Property Name"
											size="small"
											variant="outlined"
											name="name"
											onChange={handleInputChange}
											value={values.name}
											style={{
												marginBottom: "1.2rem",
												marginTop: "0.4rem",
												backgroundColor: "white",
												borderRadius: "5px",
												width: "100%",
											}}
										/>

										<TextField
											label="Address"
											size="small"
											variant="outlined"
											name="address"
											onChange={handleInputChange}
											value={values.address}
											style={{
												marginBottom: "1.2rem",
												marginTop: "0.4rem",
												backgroundColor: "white",
												borderRadius: "5px",
												width: "100%",
											}}
										/>

										<TextField
											label="Description"
											multiline
											rows={4}
											variant="outlined"
											size="small"
											name="description"
											onChange={handleInputChange}
											value={values.description}
											style={{
												marginBottom: "1.2rem",
												backgroundColor: "white",
												borderRadius: "5px",
												width: "100%",
											}}
										/>

										<TextField
											label="Image Url"
											variant="outlined"
											size="small"
											name="image"
											onChange={handleInputChange}
											value={values.image}
											style={{
												marginBottom: "1.2rem",
												backgroundColor: "white",
												borderRadius: "5px",
												width: "100%",
											}}
										/>

										<Grid container spacing={2}>
											<Grid item xs={12} sm={4}>
												<TextField
													label="Token Value"
													variant="outlined"
													size="small"
													name="tokenValue"
													onChange={handleInputChange}
													value={values.tokenValue}
													style={{
														marginBottom: "1.2rem",
														backgroundColor:
															"white",
														borderRadius: "5px",
														width: "100%",
													}}
												/>
											</Grid>
											<Grid item xs={12} sm={4}>
												<TextField
													label="Total Tokens"
													variant="outlined"
													size="small"
													name="initialSupply"
													onChange={handleInputChange}
													value={values.initialSupply}
													style={{
														marginBottom: "1.2rem",
														backgroundColor:
															"white",
														borderRadius: "5px",
														width: "100%",
													}}
												/>
											</Grid>
											<Grid item xs={12} sm={4}>
												<TextField
													label="Token Symbol"
													variant="outlined"
													size="small"
													name="symbol"
													onChange={handleInputChange}
													value={values.symbol}
													style={{
														marginBottom: "1.2rem",
														backgroundColor:
															"white",
														borderRadius: "5px",
														width: "100%",
													}}
												/>
											</Grid>
										</Grid>

										<div style={{ display: "flex" }}>
											<Grid
												container
												style={{
													width: "100%",
													justifyContent: "center",
													marginBottom: "2rem",
												}}
											>
												<Grid item xs={12} md={12}>
													<Button
														type="submit"
														varient="outlined"
														style={{
															backgroundColor:
																"#00cccc",
															color: "white",
															opacity: "0.9",
															marginTop: "0.4rem",
															marginBottom:
																"1rem",
															width: "100%",
															padding: "8px",
															fontWeight: "bold",
														}}
													>
														Submit
													</Button>
												</Grid>
											</Grid>
										</div>
									</div>
								</Grid>
							</Grid>
						</ThemeProvider>
					</div>
				</form>
			}
		</div>
	);
};

export default NewToken;
