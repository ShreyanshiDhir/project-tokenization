import { createSlice } from "@reduxjs/toolkit";
import API from "../api/api";

const initialState = {
	properties : [],
	property : null,
	loading : true
};

const propertySlice = createSlice({
	name: "property",
	initialState,
	reducers: {
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setProperties(state,action) {
			state.properties = action.payload;
			state.loading = false;
		},
		setProperty(state,action) {
			state.property = action.payload;
			state.loading = false;
		}
	},
});
export const {
	setLoading,
	setProperties,
	setProperty
} = propertySlice.actions;

export default propertySlice.reducer;
//Load all properties
export const loadAllProperties = () => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const res = await API.get("/api/property");
		console.log(res);
		dispatch(setProperties(res.data.properties));
	} catch (err) {
		const errors = err.response.data.error;
		console.log(errors);
		dispatch(setLoading(false));
	}
};
