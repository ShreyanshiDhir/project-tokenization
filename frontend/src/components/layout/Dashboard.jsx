import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { loadAllProperties } from "../../store/property";
import  PropertyItem  from "./PropertyItem";


const Dashboard = () => {
	const { user, isAuthenticated, loading, properties } = useSelector((state) => ({
		isAuthenticated: state.auth.isAuthenticated,
		user: state.auth.user,
		loading: state.auth.loading,
		properties: state.property.properties,
	}));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadAllProperties());
	}, []);
	
	return (
		(user && isAuthenticated) && (
			<div>
				{properties.map(p => (<PropertyItem 
				name={p.name}
				/>))}
			</div>
		)
	);
};

export default Dashboard;
