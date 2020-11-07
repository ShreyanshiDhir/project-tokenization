import React from 'react'
import "./Login.css";
import Grid from '@material-ui/core/Grid';

function Login() {
	return (
		<div id="mainBox">

			<div id="wrapper">
				<div id="heading">
					<h1>Welcome Back</h1>
				</div>
				<div id="signin">
					<form action="">
						<div class="form-group">
							<input type="submit" value="Log In"></input>
						</div>
					</form>
				</div>
			</div>
			
		</div>
	)
}

export default Login
