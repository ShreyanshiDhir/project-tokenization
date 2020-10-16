import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, ListItem, Box } from "@material-ui/core";

//Styles
import { makeStyles } from "@material-ui/core";
import NavbarStyles from "./NavbarStyles";
const useStyles = makeStyles(NavbarStyles);

//desktop mode uses these links
export const NavbarLink = (props) => {
	const classes = useStyles();
	return (
		<div style={{ position: "relative", marginRight: "1rem" }}>
			<NavLink
				activeClassName={classes.activeNavlink}
				exact={true}
				to={props.to}
				className={classes.links}
			>
				<Typography className={classes.navLinkText}>{props.text}</Typography>
			</NavLink>
		</div>
	);
};

//mobile mode uses these links
export const NavbarMobileLink = (props) => {
	const classes = useStyles();
	return (
		<Box display="flex" position="relative">
			<NavLink
				activeClassName={classes.activeMobileNavlink}
				exact={true}
				className={classes.drawerLinks}
				to={props.to}
			>
				<ListItem>
					<Typography className={classes.drawerText}>{props.text}</Typography>
				</ListItem>
			</NavLink>
		</Box>
	);
};
