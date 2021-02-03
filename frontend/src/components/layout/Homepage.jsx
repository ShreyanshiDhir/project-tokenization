import { Button, Grid, ThemeProvider, Typography, CardMedia, CardContent } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from 'react';
import './Homepage.css';
import Card from '@material-ui/core/Card';
import {MUItheme} from '../../theme';
import pranav from '../../assets/images/tech-sq1-icon.png'
import pranavii from '../../assets/images/blah.svg'
import pranav2 from '../../assets/images/proj_icon-removebg-preview (1).png'
import pranav3 from '../../assets/images/ghdxws-removebg-preview.png'

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
						Real Estate Tokenization and Investment
					</Typography>
				</div>
				<Typography
					style={{}}
					className="type"
					variant="h5"
					gutterBottom
				>
					Making Real Estate Investment digital and global
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
						variant="h6"
						style={{
							fontWeight: "400",
							color: "#5e5e5e",
							paddingBottom: "4rem",
						}}
					>
						It is a platform for the integrity of property holders and investors in order to create a hassle free process of trading of tokens. The product is aimed at tokenizing the real estate thus removing the need for legal paperwork and minimizing the time required for sale of real estate. It also removes the involvement of any third party in the process of trade. 
						</Typography>
				</section>
			</section>
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

								<CardContent><Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>Tokenize Your Properties</Typography></CardContent>
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
									image={pranav2}
								/>

								<CardContent><Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>Buy/Sell your tokens</Typography></CardContent>
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
									image={pranav3}
								/>

								<CardContent><Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>List your tokens on the marketplace</Typography></CardContent>
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
					FOR PROPERTY OWNERS
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
								More buyers on a single platform. 
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No need to search for any brokers{" "}
								</Typography>
							</div>
						</div>
						<div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									Competitive Market
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
								Comparison of their project with others on the market.{" "}
								</Typography>
							</div>
						</div><div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
								Reduced spenditure on Advertisements
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No need to advertise your properties to find buyers {" "}
								</Typography>
							</div>
						</div><div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									No brokerage fees
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
								No High Fees paid to any broker{" "}
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
					FOR INVESTORS
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
									tokens{" "}
								</Typography>
							</div>
						</div>
						<div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem", marginLeft:"4rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
								Saves time and efforts
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
								Single platform where you can choose the investment options wisely.{" "}
								</Typography>
							</div>
						</div><div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem" , marginLeft:"4rem"}}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
									No Brokerage Fees
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
									No High Fees paid to any broker{" "}
								</Typography>
							</div>
						</div><div style={{ display: "flex", alignItems:"center", justifyContent:"flex-start",marginTop:"2.5rem", marginLeft:"4rem" }}>
							<CheckCircleIcon style={{color:"#2B4BBF"}} />
							<div style={{textAlign:"left", marginLeft:"2rem"}}>
								<Typography variant="h5">
								No delays 
								</Typography>
								<Typography variant="h6" style={{color:"#5e5e5e", fontWeight:"light"}}>
								Avoid procedures of visiting govt offices for registeries.{" "}
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
