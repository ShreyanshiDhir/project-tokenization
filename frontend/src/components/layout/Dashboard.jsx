import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { loadAllProperties } from "../../store/property";

const Dashboard = () => {
	const { user, isAuthenticated, loading } = useSelector((state) => ({
		isAuthenticated: state.auth.isAuthenticated,
		user: state.auth.user,
		loading: state.auth.loading,
	}));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadAllProperties());
	}, []);
	return (
		(user && isAuthenticated) && (
			<div>
				<h1>Name : {user.name}</h1>
				<h1>Email : {user.email}</h1>
			</div>
		)
	);
};

export default Dashboard;
