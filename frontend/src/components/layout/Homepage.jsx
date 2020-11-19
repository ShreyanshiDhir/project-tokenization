import { Button, Grid, ThemeProvider, Typography } from '@material-ui/core';
import React from 'react';
import './Homepage.css';
import {MUItheme} from '../../theme'

const Homepage = props => {
	return (
		<div>
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
				<ThemeProvider theme={MUItheme}>
					<Grid container>
						<Grid item xs={12} md={6}>
							<Button
								className="btn"
								variant="contained"
								size="large"
								color="secondary"
								style={{
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
								color="secondary"
								style={{
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
				</ThemeProvider>
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

			<section>
				<Grid
					container
					style={{
						width: "80%",
						margin: "0 auto",
						border: "3px solid red",
					}}
				>
					<Grid item xs={12} md={4}>
						card 1
					</Grid>
					<Grid item xs={12} md={4}>
						card 2
					</Grid>
					<Grid item xs={12} md={4}>
						card 3
					</Grid>
				</Grid>
			</section>

			<section style={{ backgroundColor: "white" }}>
				<Grid
					container
					style={{
						width: "80%",
						margin: "0 auto",
						border: "3px solid red",
					}}
				>
					<Grid item xs={12} md={6}>
						vgvhjv
					</Grid>
					<Grid item xs={12} md={6}>
						vgvhjv
					</Grid>
				</Grid>
			</section>
		</div>
	);
}

export default Homepage
