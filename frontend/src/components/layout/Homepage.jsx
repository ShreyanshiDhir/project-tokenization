import { Button, Grid, ThemeProvider, Typography, CardMedia, CardContent } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from 'react';
import './Homepage.css';
import Card from '@material-ui/core/Card';
import {MUItheme} from '../../theme';
import pranav from '../../assets/images/tech-sq1-icon.png'
import pranavii from '../../assets/images/blah.svg'

const Homepage = props => {
	return (
		<div>
			<ThemeProvider theme={MUItheme}>
			<section
				className="section1"
				style={{ paddingTop: "6rem", paddingBottom: "4rem" }}
			>
				<div style={{}}>
					<Typography className="type" variant="h3" gutterBottom>
						Ethe main heading aaugi blah
					</Typography>
				</div>
				<Typography
					style={{}}
					className="type"
					variant="h5"
					gutterBottom
				>
					Ethe sub-main wali lambi heading aajugi blah blah Ethe
					sub-main wali lambi heading aajugi blah blah
				</Typography>
				
					<Grid container>
						<Grid item xs={12} md={6}>
							<Button
								className="btn"
								variant="contained"
								size="large"
								// color="secondary"
								style={{
									backgroundColor: "#00cccc",
									color: "white",
									marginTop: "4REM",
									marginLeft: "25rem",
									fontSize: "1.2rem",
								}}
							>
								Login
							</Button>
						</Grid>
						<Grid item xs={12} md={6}>
							<Button
								className="btn"
								variant="contained"
								size="large"
								// color="secondary"
								style={{
									backgroundColor: "#00cccc",
									color: "white",
									marginTop: "4REM",
									marginRight: "25rem",
									fontSize: "1.3rem",
								}}
							>
								Register
							</Button>
						</Grid>
					</Grid>
				
			</section>

			<section
				style={{
					backgroundColor: "#F2F7FD",
					textAlign: "center",
				}}
			>
				<section style={{ width: "80%", margin: "0 auto" }}>
					<Typography
						variant="h5"
						color="primary"
						
						style={{ paddingTop: "4rem", color: "#5e5e5e" }}
					>
						ABOUT OUR PROJECT
					</Typography>
					<hr
						style={{
							height: "3px", 
							color: "#00cccc",
							backgroundColor: "#00cccc",
							width: "20%",
							borderRadius: "20px",
							border: "none",
							marginLeft: "auto",
							marginRight: "auto",
							marginBottom: "1rem",
						}}
					/>
					<Typography
						gutterBottom
						variant="body1"
						style={{
							fontWeight: "400",
							color: "#5e5e5e",
							paddingBottom: "4rem",
						}}
					>
						This is the project about Real Estate Tokenization.
						Baaki thodi ji bakwaas likh dawange agge. Oh sab
						Rupanshu dssuga kr ki chhoti ji bakwaas likhni aa ethe.
						This is the project about Real Estate Tokenization.
						Baaki thodi ji bakwaas likh dawange ftyugbhijok gytres
						klkjhgf kjhgv jhgfcx lkjhgbfv ikuhjgv olikuhjg pokjkhgv
						lkjhgb okijkuhgb okljhbn lkjhgvbc poiujhgfv opikhujgf
						agge. Oh sab Rupanshu dssuga kr ki chhoti ji bakwaas
						likhni aa ethe.
					</Typography>
				</section>
			</section>
			{/* issnu background color footer wala dena aa */}
			<section style={{ backgroundColor: "white", marginTop: "-0.4rem" }}> 
				<section
					style={{
						width: "80%",
						margin: "0 auto",
						textAlign: "center",
					}}
				>
					<Typography
						variant="h5"
						style={{ paddingTop: "4rem", color: "#5e5e5e" }}
					>
						FEATURES
					</Typography>
					<hr
						style={{
							height: "2px",
							color: "#00cccc",
							backgroundColor: "#00cccc",
							width: "10%",
							borderRadius: "20px",
							border: "none",
							marginLeft: "auto",
							marginRight: "auto",
							marginBottom: "1rem",
						}}
					/>
					<Grid
						container
						style={{
							margin: "0 auto",
							marginTop: "1.5rem",
							paddingBottom: "4rem",
						}}
					>
						<Grid item xs={12} md={4}>
							<Card
								elevation={3}
								style={{ width: "80%", margin: "0 auto" }}
							>
								<CardMedia
									style={{
										width: "6rem",
										height: "6rem",
										margin: "0 auto",
										marginTop: "1rem",
									}}
									component="img"
									image={pranav}
								/>

								<CardContent>pranav pagal hai</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card
								elevation={3}
								style={{ width: "80%", margin: "0 auto" }}
							>
								<CardMedia
									style={{
										width: "6rem",
										height: "6rem",
										margin: "0 auto",
										marginTop: "1rem",
									}}
									component="img"
									image={pranav}
								/>

								<CardContent>pranav pagal hai</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={4}>
							<Card
								elevation={3}
								style={{ width: "80%", margin: "0 auto" }}
							>
								<CardMedia
									style={{
										width: "6rem",
										height: "6rem",
										margin: "0 auto",
										marginTop: "1rem",
									}}
									component="img"
									image={pranav}
								/>

								<CardContent>pranav pagal hai</CardContent>
							</Card>
						</Grid>
					</Grid>
				</section>
			</section>



			<section
				style={{ backgroundColor: "#F2F7FD", textAlign: "center" }}
			>
				<Typography
					variant="h5"
					style={{ paddingTop: "4rem", color: "#5e5e5e" }}
				>
					FOR INVESTERS
				</Typography>
				<hr
					style={{
						height: "2.5px",
						color: "#00cccc",
						backgroundColor: "#00cccc",
						width: "12.5%",
						borderRadius: "20px",
						border: "none",
						marginLeft: "auto",
						marginRight: "auto",
						marginBottom: "1rem",
					}}
				/>
				<Grid
					container
					style={{
						width: "80%",
						margin: "0 auto",
					
					}}
				>
					<Grid item xs={12} md={6}>
						<img
							style={{ width: "24rem", height: "30rem" }}
							src="https://www.meridio.co/static/media/Investors.f921648b.svg"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Lower investment minimums
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No large capital requirements with digital
									shares{" "}
								</Typography>
							</div>
						</div>
						<div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Lower investment minimums
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No large capital requirements with digital
									shares{" "}
								</Typography>
							</div>
						</div><div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Lower investment minimums
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No large capital requirements with digital
									shares{" "}
								</Typography>
							</div>
						</div><div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Lower investment minimums
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No large capital requirements with digital
									shares{" "}
								</Typography>
							</div>
						</div>
						
					</Grid>
				</Grid>
			</section>

			<section
				style={{ backgroundColor: "white", textAlign: "center" }}
			>
				<Typography
					variant="h5"
					style={{ paddingTop: "4rem", color: "#5e5e5e" }}
				>
					FOR PROPERTY OWNERS
				</Typography>
				<hr
					style={{
						height: "2.5px",
						color: "#00cccc",
						backgroundColor: "#00cccc",
						width: "19.5%",
						borderRadius: "20px",
						border: "none",
						marginLeft: "auto",
						marginRight: "auto",
						marginBottom: "1rem",
					}}
				/>
				<Grid
					container
					style={{
						width: "80%",
						margin: "0 auto",
					
					}}
				>
					
					<Grid item xs={12} md={6}>
						<div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem", marginLeft:"4rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Lower investment minimums
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No large capital requirements with digital
									shares{" "}
								</Typography>
							</div>
						</div>
						<div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem", marginLeft:"4rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Lower investment minimums
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No large capital requirements with digital
									shares{" "}
								</Typography>
							</div>
						</div><div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" , marginLeft:"4rem"}}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Lower investment minimums
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No large capital requirements with digital
									shares{" "}
								</Typography>
							</div>
						</div><div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem", marginLeft:"4rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Lower investment minimums
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No large capital requirements with digital
									shares{" "}
								</Typography>
							</div>
						</div>
						
					</Grid>

					<Grid item xs={12} md={6}>
						<img
							style={{ width: "24rem", height: "30rem" }}
							src="https://www.meridio.co/static/media/Owners.72baabac.svg"
						/>
					</Grid>
				</Grid>
			</section>

			</ThemeProvider>
		</div>
	);
}

export default Homepage
