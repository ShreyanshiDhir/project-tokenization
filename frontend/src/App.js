import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Homepage from "./components/layout/Homepage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Register from "./components/auth/Register";
import Dashboard from "./components/layout/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./store/auth";
import { useDispatch } from "react-redux";
import  NewToken  from "./components/property/NewToken";
import  Property  from "./components/property/Property";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem("token")) {
			setAuthToken(localStorage.getItem("token"));
			dispatch(loadUser());
		}
	}, []);
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register' component={Register} />
					<PrivateRoute
						exact
						path='/dashboard'
						component={Dashboard}
					/>
					<PrivateRoute
						exact
						path='/new-token'
						component={NewToken}
					/>
					<PrivateRoute
						exact
						path='/property/:id'
						component={Property}
					/>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
