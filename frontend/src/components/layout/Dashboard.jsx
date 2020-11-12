import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { loadAllProperties } from "../../store/property";
import  PropertyItem  from "./PropertyItem";
import  UserInfo  from "./UserInfo";
import {Grid, Typography} from '@material-ui/core';

import Aos from "aos";
import "aos/dist/aos.css";

import HomeWorkIcon from '@material-ui/icons/HomeWork';

const Dashboard = () => {

	const { user, isAuthenticated, loading, properties } = useSelector((state) => ({
		isAuthenticated: state.auth.isAuthenticated,
		user: state.auth.user,
		loading: state.auth.loading,
		properties: state.property.properties,
	}));
	const dispatch = useDispatch();
	useEffect(() => {
		if(!loading) dispatch(loadAllProperties());
		Aos.init({duration: 800, offset: 10});
	}, [loading]);
	
	return (
		user &&
		isAuthenticated && (
			<div>
				<div style={{ display: "flex", justifyContent: "center" }}>
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
							backgroundColor: "#ffffff",
							width: "90%",
							height: "4.3rem",
							display:"flex",
							paddingTop: "1rem",
						}}
					>
						<Grid container>
							<Grid item xs={12} md={6}>
								<Typography
									variant="h4"
									style={{ marginLeft: "7rem" }}
								>
									Available Investments
								</Typography>

								<hr
									style={{
										height: "4px",
										color: "#00cccc",
										marginLeft: "7rem",
										backgroundColor: "#00cccc",
										width: "25%",
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
									<PropertyItem name={p.name} />
								</Grid>
								
							))}
						</Grid>
					</div>
				</div>
			</div>
		)
	);
};

export default Dashboard;
