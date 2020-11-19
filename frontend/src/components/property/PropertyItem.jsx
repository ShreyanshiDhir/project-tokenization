import React from "react";
import "./PropertyItem.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		"&:hover": {
			transform: "scale(1.02)",
			transitionTimingFunction: "ease",
		},
		transition: "0.5s",
	},
	link: {
		textDecoration: "none",
	},
});

function PropertyItem({ id, name, tokenValue, initialSupply, symbol }) {
	const classes = useStyles();

	return (
		<Link className={classes.link} to={`/property/${id}`}>
			<Card
				className={classes.root}
				style={{ boxShadow: " 0 30px 50px -14px rgba(0,0,0,0.25)" }}
			>
				<CardActionArea>
					<CardMedia
						component='img'
						alt='Property Image'
						height='224'
						image='https://cdn.cnn.com/cnnnext/dam/assets/200211140555-09-dubai-buildings.jpg'
						title='Property Image'
					/>
					<CardContent>
						<Typography gutterBottom variant='h5' component='h2'>
							{name}
						</Typography>
						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography
									variant='body2'
									color='textSecondary'
									component='p'
								>
									Token Symbol:
								</Typography>
							</Grid>
							<Grid item xs={6}>
								{symbol}
							</Grid>
						</Grid>

						<Grid container spacing={3}>
							<Grid item xs={6}>
								<Typography
									variant='body2'
									color='textSecondary'
									component='p'
								>
									Total Tokens:
								</Typography>
							</Grid>
							<Grid item xs={6}>
								{initialSupply.$numberDecimal}
							</Grid>
						</Grid>
					</CardContent>
					<CardContent
						style={{
							backgroundColor: "#00cccc",
							height: "auto",
							color: "white",
							padding: "12px",
						}}
					>
						<Typography variant='caption'>Token Price</Typography>
						<Typography variant='h5' style={{ fontWeight: "bold" }}>
							{tokenValue.$numberDecimal}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Link>
	);
}
PropertyItem.defaultProps = {
	tokenValue: 0,
	initialSupply: 10,
	symbol: "XYZ",
};
export default PropertyItem;
