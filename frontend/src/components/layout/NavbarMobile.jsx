import React, { useState } from "react";
import { SwipeableDrawer, List, IconButton, withStyles } from "@material-ui/core";


//icon for mobile drawer
import MenuIcon from "@material-ui/icons/Menu";
import ListIcon from '@material-ui/icons/List';

//components
import { NavbarMobileLink } from "./NavbarLink";

//Styles
import NavbarStyles from "./NavbarStyles";
// const useStyles = makeStyles(NavbarStyles);

const NavbarMobile = (props) => {
	// const classes = useStyles();
	const { classes } = props;
	const [state, setState] = useState(false);

	const toggleDrawer = (anchor, open) => (event) => {
		setState(!state);
	};
	return (
		<div>
			<IconButton onClick={toggleDrawer()}>
				<MenuIcon style={{ color: "white" }} />
			</IconButton>
			{/* <Hidden mdUp> */}
			<SwipeableDrawer
				classes={{
					paper: classes.paper,
				}}
				className={classes.drawer}
				anchor="right"
				open={state}
				onOpen={toggleDrawer()}
				onClose={toggleDrawer()}
			>
				<div className={classes.drawerBackBtn}>
					<IconButton onClick={toggleDrawer()}>
						<ListIcon style={{ color: "white" }} />
					</IconButton>
				</div>

				{/* <Divider /> */}
				<List>
					<NavbarMobileLink to="/" text="LOGO" />
					<NavbarMobileLink to="/login" text="Login" />
					<NavbarMobileLink to="/register" text="Register" />
				</List>
			</SwipeableDrawer>
			{/* </Hidden> */}
		</div>
	);
};

export default withStyles(NavbarStyles)(NavbarMobile);
