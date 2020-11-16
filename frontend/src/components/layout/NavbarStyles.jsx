const navbarStyles = (theme) => ({
	root: {
		"& > * ": {
			marginTop: theme.spacing(4),
			width: "25ch",
		},
	},
	nav: {
		width: "100%",
	},
	//title
	title: {
		flexGrow: 1,
		fontSize: "20",
		textDecoration: "none",
	},
	titleText: {
		fontWeight: "bold",
		fontSize:"1.3rem",
        color:"white"
	},
	//desktop links and link text
	link: {
		width: "100%",
		height: "100%",
		textDecoration: "none",
	},
	paper: {
		background: theme.palette.primary.main,
	},
	links: {
		textDecoration: "none",
		color: "white",
		"&:before": {
			content: `""`,
			position: "absolute",
			left: 0,
			right: 0,
			bottom: -5,
			height: 3,
			backgroundColor: "white",
			transform: "scaleX(0)",
		},
		"&:hover:before": {
			transform: "scaleX(1)",
			transition: "transform 350ms ease-in-out",
		},
	},
	//activeLink
	activeNavlink: {
		"&:before": {
			transform: "scaleX(1)",
			content: `""`,
			position: "absolute",
			left: 0,
			right: 0,
			bottom: -5,
			height: 3,
			backgroundColor: "white",
			borderRadius: 8,
		},
	},
	navLinkText: {
		fontFamily: theme.typography.fontFamily,
		fontSize: "1.2rem",
	},

	//responsive behavior
	desktopNav: {
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	},
	mobileNav: {
		display: "none",
		[theme.breakpoints.down("md")]: {
			display: "block",
		},
	},
	//mobile links and link text
	drawerLinks: {
		textDecoration: "none",
		color: "white",
	},
	drawerText: {
		margin: "0.5rem 1rem",
		fontFamily: theme.typography.fontFamily,
	},
	drawerBackBtn: {
		marginLeft: "1rem",
		height: "3.5rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});
export default navbarStyles;
