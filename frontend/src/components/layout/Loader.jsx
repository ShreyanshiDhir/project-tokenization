import React from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

const Loader = props => {
    return (
		<div>
			<div
				style={{
					position: "relative",
					height: "80vh",
					width: "100%",
					backgroundColor: "rgba(0,0,0,0.6)",
					marginBottom: "-5rem",
				}}
			></div>
			<div
				style={{
					position: "absolute",
					top: "39%",
					width: "100%",
					textAlign: "center",
					fontSize: "18px",
				}}
			>
				<Card style={{maxWidth:"20rem", margin:"0 auto" }}>
                    <Typography variant="h5" style={{padding:"3rem"}}>
                        Loading ...
                    </Typography>
                </Card>
			</div>
		</div>
	);
}



export default Loader
