import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid } from "@material-ui/core";
import { MUItheme } from "../../theme";
import { ThemeProvider } from "@material-ui/core";
import logo from "../../assets/images/logo_meridio.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
	root: {
		listStyleType: "none",
		paddingInlineStart: "0",
		"& a": {
			color: "white",
			textDecoration: "none",
		},
		"& li": {
			textAlign: "left",
		},
	},
});
const Footer = () => {
	const classes = useStyles();
	return (
		<ThemeProvider theme={MUItheme}>
			<div
				style={{
					bottom: "0",
					backgroundColor: "#22316C",
					marginTop: "5rem",
				}}
			>
				<Box display='flex' flexDirection='column'>
					<Grid
						container
						direction='row'
						justify='space-evenly'
						alignItems='flex-start'
						style={{
							color: "white",
							marginTop: "2rem",
						}}
					>
						<Grid item sm={5} md={2}>
							<h3>Logo</h3>
							<img
								style={{ height: "7rem", width: "5rem" }}
								src={logo}
							/>
						</Grid>
						<Grid item sm={5} md={2}>
							<h3>Company</h3>
							<ul className={classes.root}>
								<li>
									<Link to='/blog'>Blog</Link>
								</li>
								<li>
									<Link to='/'>FAQ</Link>
								</li>
								<li>
									<Link to='/'>Contact</Link>
								</li>
							</ul>
						</Grid>
						<Grid item sm={5} md={2}>
							<h3>Resources</h3>
							<ul className={classes.root}>
								<li>
									<Link to='/'>ConsnSys</Link>
								</li>
								<li>
									<Link to='/'>Legal</Link>
								</li>
								<li>
									<Link to='/'>Blockchain 101</Link>
								</li>
								<li>
									<Link to='/'>Term Of Use</Link>
								</li>
								<li>
									<Link to='/'>Private Policy</Link>
								</li>
							</ul>
						</Grid>
						<Grid item sm={5} md={2}>
							<h3>Socials</h3>
							<ul className={classes.root}>
								<li>
									<Link to='/'>LinkedIn</Link>
								</li>
								<li>
									<Link to='/'>Twitter</Link>
								</li>
								<li>
									<Link to='/'>Facebook</Link>
								</li>
								<li>
									<Link to='/'>Instagram</Link>
								</li>
							</ul>
						</Grid>
					</Grid>
					<div
						style={{
							marginLeft: "3rem",
							marginRight: "3rem",
							marginBottom: "2rem",
							lineHeight: "1.7",
							color: "white",
						}}
					>
						<p style={{ fontSize: "13px" }}>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed consequat dolor vel nisi vestibulum
							accumsan. Integer tristique quis leo nec imperdiet.
							Nam malesuada at augue id sollicitudin. Duis non
							aliquam sem. Nullam mauris eros, porta consequat
							libero in, placerat scelerisque nulla. Donec nunc
							diam, fringilla et vulputate sit amet, hendrerit ac
							urna. Class aptent taciti sociosqu ad litora
							torquent per conubia nostra, per inceptos himenaeos.
							Duis ut molestie sem. Morbi rutrum condimentum nisl
							vel ultricies. Phasellus lobortis lectus a nunc
							lobortis malesuada. Vivamus vel quam ac neque
							interdum malesuada. Ut ut hendrerit neque.
						</p>
					</div>
				</Box>
			</div>
		</ThemeProvider>
	);
};

export default Footer;
