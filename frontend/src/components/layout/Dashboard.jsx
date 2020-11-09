import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { loadAllProperties } from "../../store/property";
import  PropertyItem  from "./PropertyItem";
import {Grid} from '@material-ui/core';

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
		user &&
		isAuthenticated && (
			<div style={{display:"flex", textAlign:"center", justifyContent:"center"}}>
				<Grid container style={{width:"82%"}}>
					{properties.map((p) => (
						<Grid item xs={12} md={4} style={{display:"flex", textAlign:"center", justifyContent:"center", marginTop:"4rem"}}>
							<PropertyItem name={p.name} />
						</Grid>
					))}
				</Grid>
			</div>
		)
	);
};

export default Dashboard;
