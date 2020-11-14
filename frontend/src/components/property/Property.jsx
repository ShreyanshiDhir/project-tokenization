import { Grid, ThemeProvider, Paper,Link } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {MUItheme} from '../../theme'
import house from '../../assets/images/house.jpg'

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	pos: {
		marginBottom: 12,
    },
   
});


const Property = () => {

    const classes = useStyles();
    
    return (
		<ThemeProvider theme={MUItheme}>
			<div>
				<Grid container style={{ width: "90%", margin: "3rem auto" }}>
					<Grid item xs={12} md={4}>
						<Card
							className={classes.root}
							style={{ width: "80%", margin: "auto" }}
						>
							<CardContent
								style={{
									textAlign: "left",
									marginLeft: "1rem",
								}}
							>
								<Typography
									className={classes.title}
									variant="h6"
									gutterBottom
								>
									Price
								</Typography>
								<hr
									style={{
										height: "3px",
										backgroundColor: "#00cccc",
										color: "#00cccc",
										border: "none",
										width: "30%",
										marginLeft: "0",
									}}
								/>
								<div style={{ display: "flex" }}>
									<Typography variant="h3" component="h2">
										318
									</Typography>

									<Typography
										style={{
											marginTop: "1.2rem",
											fontWeight: "bold",
										}}
										variant="h5"
									>
										{" "}
										‏‏‎ ‎‎ETH
									</Typography>
								</div>
								<Typography
									className={classes.pos}
									color="textSecondary"
								>
									Per Token
								</Typography>
								<Typography variant="h6">
									<hr
										style={{
											height: "2px",
											backgroundColor: "#e0e0e0",
											color: "#e0e0e0",
											border: "none",
											width: "94%",
											marginLeft: "0",
										}}
									/>
									Buy Tokens
								</Typography>

								<hr
									style={{
										height: "3.2px",
										backgroundColor: "#00cccc",
										color: "#00cccc",
										border: "none",
										width: "38%",
										marginLeft: "0",
									}}
								/>

								<TextField
									id="filled-basic"
									label="Filled"
									variant="filled"
									size="small"
									label="Number of Tokens"
									color="secondary"
									style={{ marginTop: "1rem", width: "90%" }}
								/>

								<Grid container style={{ marginTop: "1rem" }}>
									<Grid item xs={12} md={6}>
										<Typography
											color="textSecondary"
											variant="body1"
											style={{
												marginTop: "7px",
												marginLeft: "4px",
											}}
										>
											Total:
										</Typography>
									</Grid>
									<Grid item xs={12} md={6}>
										<Typography
											variant="h6"
											style={{
												width: "100%",
												textAlign: "center",
											}}
										>
											234 ETH
										</Typography>
									</Grid>
								</Grid>

								<Button
									variant="contained"
									color="secondary"
									style={{
										color: "white",
										width: "91%",
										fontSize: "1rem",
										marginTop: "1rem",
										marginBottom: "1rem",
										borderRadius: "3px",
									}}
								>
									BUY
								</Button>
							</CardContent>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={8}
						style={{ height: "50rem", width: "80%" }}
					>
						<div
							style={{
								height: "50%",
								backgroundImage: `url(${house})`,
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
							}}
						></div>
						<div style={{ height: "9%", display: "flex" }}>
							<Paper
								square="true"
								elevation={0}
								style={{
									width: "100%",
									height: "86%",
									marginTop: "0.3rem",
									padding: "0.8rem 1rem",
								}}
							>
								<span
									style={{
										backgroundColor: "green",
										borderRadius: "3px",
										color: "white",
										padding: "0.5rem 0.7rem",
										marginLeft: "0.6rem",
									}}
								>
									AVAILABLE
								</span>
								<span>
									<Button
										style={{
											color: "#00cccc",
											fontWeight: "bold",
											marginLeft: "2rem",
										}}
									>
										VIEW ON ETHER SCAN
									</Button>
								</span>
								<span>
									<Button
										style={{
											color: "#00cccc",
											fontWeight: "bold",
											marginLeft: "2rem",
										}}
									>
										COPY LINK
									</Button>
								</span>
							</Paper>
						</div>
						<div style={{ height: "41%" }}>
							<Paper
								square="true"
								elevation={0}
								style={{
									width: "100%",
									height: "100%",
									padding: "1rem 2.3rem",
								}}
							>
								<Grid container>
									<Grid item xs={2} >
										<img style={{width:"50%", height:"80%", marginLeft:"1.8rem"}} src="https://www.pinclipart.com/picdir/big/76-769660_corporate-office-properties-building-clipart.png"></img>
									</Grid>
									<Grid item xs={10}>
										<Typography variant="h4">
											Art Deco Office Building
										</Typography>
										<Typography variant="body1" color="textSecondary">
											111 8th Avenue 
										</Typography>
										<Typography variant="body1" color="textSecondary" gutterBottom>
											New York NY 
										</Typography>
									</Grid>
								</Grid>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Aenean sed adipiscing diam donec adipiscing
								tristique risus nec. Faucibus nisl tincidunt
								eget nullam non nisi est sit amet. Sed odio
								morbi quis commodo odio aenean sed. Aliquet eget
								sit amet tellus cras adipiscing. Massa ultricies
								mi quis hendrerit dolor magna eget. Id aliquet
								risus feugiat in ante metus dictum. Malesuada
								pellentesque elit eget gravida cum sociis
								natoque penatibus et. Viverra suspendisse
								potenti nullam ac tortor vitae. Consequat mauris
								nunc congue nisi vitae suscipit. Porta lorem
								mollis aliquam ut porttitor leo. Nec dui nunc
								mattis enim ut tellus. Enim nunc faucibus a
								pellentesque sit amet. Nisi est sit amet
								facilisis magna. Egestas erat imperdiet sed
								euismod nisi porta lorem mollis aliquam. Sociis
								natoque penatibus et magnis dis parturient. Eu
								feugiat pretium nibh ipsum consequat nisl vel.
								Lectus mauris ultrices eros in cursus turpis
								massa tincidunt dui. Pharetra magna ac placerat
								vestibulum lectus mauris ultrices.
							</Paper>
						</div>
					</Grid>
				</Grid>
			</div>
		</ThemeProvider>
	);
}
 export default Property;