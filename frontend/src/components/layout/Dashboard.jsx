import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadAllProperties } from "../../store/property";
import PropertyItem from "../property/PropertyItem";
import UserInfo from "./UserInfo";
import { Grid, Typography } from "@material-ui/core";
import { MUItheme } from "../../theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Aos from "aos";
import "aos/dist/aos.css";

const Dashboard = () => {
	const history = useHistory();
	const { user, isAuthenticated, loading, properties } = useSelector(
		(state) => ({
			isAuthenticated: state.auth.isAuthenticated,
			user: state.auth.user,
			loading: state.auth.loading,
			properties: state.property.properties,
		})
	);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!loading) dispatch(loadAllProperties());
		Aos.init({ duration: 800, offset: 10 });
		if (!isAuthenticated) history.push("/login"); //redirect to login if not authenticated
	}, [loading, history, isAuthenticated]);

	return (
		user &&
		isAuthenticated && (
			<MuiThemeProvider theme={MUItheme}>
				<div>
					{/* <div style={{ display: "flex", justifyContent: "center" }}>
					<div
						style={{
							backgroundColor: "#ffffff",
							height: "13rem",
							display: "flex",
							alignItems: "center",
							width: "90%",
							marginTop: "3rem",
							border: "2px solid #e5e5e5",
						}}
					>
						<div style={{ width: "100%", margin: "3rem auto" }}>
							<Grid container spacing={2}>
								<Grid item xs={6} md={3}>
									<UserInfo />
								</Grid>
								<Grid item xs={6} md={3}>
									<UserInfo />
								</Grid>
								<Grid item xs={6} md={3}>
									<UserInfo />
								</Grid>
								<Grid item xs={6} md={3}>
									<UserInfo />
								</Grid>
							</Grid>
						</div>
					</div>
				</div> */}
					<div style={{ display: "flex", justifyContent: "center" }}>
						<div
							style={{
								backgroundColor: "#ffffff",
								height: "10rem",
								display: "flex",
								// alignItems: "center",
								width: "90%",
								marginTop: "3rem",
								border: "2px solid #e5e5e5",
							}}
						>
							<div
								style={{
									marginLeft: "3rem",
									marginTop: "1.5rem",
									width: "100%",
								}}
							>
								<Grid container spacing={3}>
									<Grid item xs={12} md={1}>
										<img
											style={{
												height: "6rem",
												width: "6rem",
											}}
											src="https://bloomhospital.com/images/user.png"
										></img>
									</Grid>
									<Grid
										item
										style={{ marginTop: "1.1rem" }}
										xs={12}
										md={3}
									>
										<Typography variant="h5">
											Pranav Garg
										</Typography>
										<Typography variant="h7">
											asdfghjkllmnbvcxz@gmail.com
										</Typography>
									</Grid>
									<Grid item xs={12} md={8}>
										<Typography variant="h5">
											My holdings
											<hr
												style={{
													height: "3px",
													color: "#00cccc",
													backgroundColor: "#00cccc",
													marginTop: "0.3rem",
													borderRadius: "20px",
													border: "none",
													marginBottom: "0",
													marginRight: "5rem",
												}}
											/>
										</Typography>

										<Button
											variant="contained"
											color="secondary"
											style={{
												backgroundColor: "#00cccc",
												color: "white",
												marginRight: "1rem",
												fontSize: "1rem",
												marginTop: "1rem",
												marginBottom: "1rem",
												borderRadius: "3px",
											}}
										>
											ABC
										</Button>
										<Button
											variant="contained"
											color="secondary"
											style={{
												backgroundColor: "#00cccc",
												color: "white",
												marginRight: "1rem",
												fontSize: "1rem",
												marginTop: "1rem",
												marginBottom: "1rem",
												borderRadius: "3px",
											}}
										>
											XYZ
										</Button>
										<Button
											variant="contained"
											color="secondary"
											style={{
												backgroundColor: "#00cccc",
												color: "white",
												marginRight: "1rem",
												fontSize: "1rem",
												marginTop: "1rem",
												marginBottom: "1rem",
												borderRadius: "3px",
											}}
										>
											SHR
										</Button>
										<Button
											variant="contained"
											color="secondary"
											style={{
												backgroundColor: "#00cccc",
												color: "white",
												marginRight: "1rem",
												fontSize: "1rem",
												marginTop: "1rem",
												marginBottom: "1rem",
												borderRadius: "3px",
											}}
										>
											DHR
										</Button>
									</Grid>
								</Grid>
							</div>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "2rem",
						}}
					>
						<div
							style={{
								backgroundColor: "white",
								width: "90%",
								height: "4.3rem",
								display: "flex",
								paddingTop: "1rem",
							}}
						>
							<Grid container>
								<Grid
									item
									xs={12}
									md={12}
									style={{ textAlign: "center" }}
								>
									<Typography variant="h4">
										AVAILABLE​  INVESTMENTS
									</Typography>

									<hr
										style={{
											height: "4px",
											color: "#00cccc",

											backgroundColor: "#00cccc",
											width: "100%",
											borderRadius: "20px",
											border: "none",
											marginBottom: "0",
										}}
									/>
								</Grid>
							</Grid>
						</div>
					</div>

					<div
						style={{
							display: "flex",
							textAlign: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								width: "90%",
								backgroundColor: "#ffffff",
								marginTop: "0.5rem",
								display: "flex",
								justifyContent: "center",
							}}
						>
							<Grid container style={{ width: "88%" }}>
								{properties.map((p) => (
									<Grid
										data-aos="fade-up"
										key={p._id}
										item
										xs={12}
										md={4}
										style={{
											display: "flex",
											textAlign: "center",
											justifyContent: "center",
											marginTop: "4rem",
										}}
									>
										<PropertyItem
											id={p._id}
											name={p.name}
											tokenValue={p.tokenValue}
											initialSupply={p.initialSupply}
											symbol={p.symbol}
										/>
									</Grid>
								))}
							</Grid>
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		)
	);
};

export default Dashboard;
