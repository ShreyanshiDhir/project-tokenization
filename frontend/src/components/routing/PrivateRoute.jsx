import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const {
		auth: { isAuthenticated, loading },
	} = useSelector(
		(state) => ({
			auth: state.auth,
		}),
		shallowEqual
	);
	return (
		<Route
			{...rest}
			render={(props) =>
				!isAuthenticated && !loading ? (
					<Redirect to='/login' />
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PrivateRoute;
