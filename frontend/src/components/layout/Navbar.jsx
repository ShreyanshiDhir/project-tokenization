import React from "react";
import { AppBar, Toolbar, Box, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import { shallowEqual, useSelector,useDispatch } from "react-redux";
import {logout} from '../../store/auth'
//material theme
import { MUItheme } from "../../theme";

//mobile nav drawer
import NavbarMobile from "./NavbarMobile";

//components
import { NavbarLink } from "./NavbarLink";



//Styles
import NavbarStyles from "./NavbarStyles.jsx";
const useStyles = makeStyles(NavbarStyles);

const Navbar = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector(
		(state) => ({
			isAuthenticated: state.auth.isAuthenticated,
			user: state.auth.user,
		}),
		shallowEqual
	);
	return (
		<ThemeProvider theme={MUItheme}>
			<div>
				<AppBar position="sticky" style={{ boxShadow: "none" }}>
					<div style={{ position: "relative", top: "0", left: "0", zIndex: "200" }}>
						<Container>
							<Toolbar>
								<Box
									className={classes.nav}
									display="flex"
									flexDirection="row"
									justifyContent="space-between"
									alignItems="center"
								>
									<div
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
										}}
									>
										{/* <img src={logo wali image} width="60" alt="acm-logo" style={{ padding: "1rem" }} /> */}
										<Link to="/" className={classes.title}>
											<Typography className={classes.titleText}>BLAH</Typography>
										</Link>
									</div>
									{/* On Desktop */}
									<Box display="flex" flexDirection="row" className={classes.desktopNav}>
										{isAuthenticated ? (<>
											<NavbarLink to="/dashboard" text="Dashboard" />
											<Link className={classes.links} onClick={() => dispatch(logout())}>
											<Typography className={classes.navLinkText}>Logout</Typography>
											</Link>
										</>) : 
										(
										<>
										<NavbarLink to="/login" text="Login" />
										<NavbarLink to="/register" text="Register" /></>
										)}
									</Box>
									{/* On Mobile Devices */}
									<Box className={classes.mobileNav}>
										<NavbarMobile />
									</Box>
								</Box>
							</Toolbar>
						</Container>
					</div>
				</AppBar>
			</div>
		</ThemeProvider>
	);
};

export default Navbar;
