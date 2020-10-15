import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
	const { user, isAuthenticated, loading } = useSelector((state) => ({
		isAuthenticated: state.auth.isAuthenticated,
		user: state.auth.user,
		loading: state.auth.loading,
	}));

	return (
		(user && isAuthenticated) && (
			<div className="box">
				<h1>Name : {user.name}</h1>
				<h1>Email : {user.email}</h1>
			</div>
		)
	);
};

export default Dashboard;
