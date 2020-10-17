import React from 'react';
import { Box, Container, Grid } from "@material-ui/core";
import { MUItheme } from "../../theme";
import { ThemeProvider, Link} from "@material-ui/core";
import logo from '../../assets/images/logo_meridio.png';


const Footer = () => {
	return (
		
		<ThemeProvider theme={MUItheme}>
			<div style={{position:"fixed",bottom:"0", width:"100%", backgroundColor:"#22316C"}}>
			<Box display="flex" flexDirection="column">
				<Grid
					container
					spacing={3}
					direction="row"
					justify="space-evenly"
					alignItems="flex-start"
					style={{ textAlign:"center", color:"white", marginTop:"2rem"}}
				>
					<Grid  item xs={11} sm={5} md={2} >
							<h3>Logo</h3> 
							<img style={{height:"7rem", width:"5rem"}} src={logo} />
					</Grid>
					<Grid item xs={11} sm={5} md={2} >
							<h3>Company</h3>
							<ul style={{listStyleType:"none"}} >
								<li><Link color="white">Blog</Link></li>
								<li><Link color="white">FAQ</Link></li>
								<li><Link color="white">Contact</Link></li>
							</ul>
					</Grid>
					<Grid item xs={11} sm={5} md={2} >
							<h3>Resources</h3>
							<ul style={{listStyleType:"none"}}>
								<li><Link color="white">ConsnSys</Link></li>
								<li><Link color="white">Legal</Link></li>
								<li><Link color="white">Blockchain 101</Link></li>
								<li><Link color="white">Term Of Use</Link></li>
								<li><Link color="white">Private Policy</Link></li>
							</ul>
					</Grid>
					<Grid item xs={11} sm={5} md={2} >
							<h3>Socials</h3> 
							<ul style={{listStyleType:"none"}}>
								<li><Link color="white">LinkedIn</Link></li>
								<li><Link color="white">Twitter</Link></li>
								<li><Link color="white">Facebook</Link></li>
								<li><Link color="white">Instagram</Link></li>
							</ul>
					</Grid>
				</Grid>
				<div style={{marginLeft:"3rem", marginRight:"3rem", marginBottom:"2rem",lineHeight: "1.7", color:"white"}}>
					<p style={{fontSize:"13px"}}>This website (the "Site") is operated by [Meridio Inc.] ("Meridio"). Meridio is not registered or required to be registered as a broker-dealer with the U.S. Securities and Exchange Commission ("SEC") and is not a member of the Financial Industry Regulatory Authority, Inc. ("FINRA"). The Site allows for the offer, sale, purchase, and negotiation of securities offered and sold in compliance with Rule 506 of Regulation D by and between the issuers of such securities and potential purchasers. Any purchase and sale of any securities displayed on the Site is negotiated and consummated directly between the issuers and the purchasers or such securities. Meridio does not take possession of or hold funds or securities in connection with any such purchases or sales. The securities displayed on the Site may be restricted securities that are highly illiquid and Meridio does not operate any exchange for the resale of such securities, nor can Meridio provide any assurance whatsoever that a secondary market for any particular security will develop. Meridio does not offer investment advice, endorsement, analysis or recommendations with respect to any securities. All securities displayed or offered on the Site, and all the information related thereto, is the sole responsibility of the issuer of such securities, and Meridio has not taken any steps to verify the adequacy, accuracy or completeness of any information displayed through the Site relating to issuers, assets or securities. Certain portions of the Site may only be accessed by accredited investors as defined in Rule 501(a) of Regulation D. By accessing any portion of the Site, you agree to be bound by the Terms of Use and Privacy Policy.</p>
				</div>
			</Box>
			</div>
		</ThemeProvider>
	
	)
}

export default Footer