import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/auth/Register";
import Dashboard from "./components/layout/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./store/auth";
import { useDispatch } from "react-redux";
const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem("token"))
		{
			setAuthToken(localStorage.getItem("token"));
			dispatch(loadUser());
		}
	}, []);
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<PrivateRoute
						exact
						path='/dashboard'
						component={Dashboard}
					/>
				<Footer/>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
