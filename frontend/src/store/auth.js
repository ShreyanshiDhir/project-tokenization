import { createSlice } from "@reduxjs/toolkit";
import API from "../api/api";
import setAuthToken from "../utils/setAuthToken";
import isEmpty from "../utils/isEmpty";
const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	loading: true,
	user: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setToken(state, action) {
			state.isAuthenticated = !isEmpty(action.payload);
			state.token = action.payload;
			state.loading = false;
		},
		setCurrentUser(state, action) {
			state.isAuthenticated = !isEmpty(action.payload);
			state.user = action.payload.user;
			state.loading = false;
		},
		setError(state, action) {
			state.token = null;
			state.isAuthenticated = false;
			state.user = null;
			state.loading = false;
		},
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setLogout(state, action) {
			state.token = null;
			state.isAuthenticated = false;
			state.user = null;
			state.loading = false;
		},
	},
});
export const {
	setToken,
	setCurrentUser,
	setError,
	setLoading,
	setLogout,
} = authSlice.actions;

export default authSlice.reducer;

//Load a new user
export const loadUser = () => async (dispatch) => {
	try {
		dispatch(setLoading(true));
		const res = await API.get("/api/auth");
		dispatch(setCurrentUser(res.data));
	} catch (err) {
		const errors = err.response.data.error;
		console.log(errors);
		dispatch(setError()); // this makes loading : false
	}
};

//register a new user
export const registerUser = ({ name, email, password }) => async (dispatch) => {

	const body = JSON.stringify({ name, email, password });
	try {
		dispatch(setLoading(true));
		const res = await API.post("/api/user", body);
		if (res.data.token) {
			console.log(res.data);
			setAuthToken(res.data.token);
			dispatch(loadUser());
			dispatch(setToken(res.data.token)); // this would make loading : false
		}
	} catch (err) {
		const errors = err.response.data.error;
		console.log(errors);
		dispatch(setError()); // this makes loading : false
	}
};

//User login
export const login = ({ email, password }) => async (dispatch) => {
	const body = JSON.stringify({ email, password });
	try {
		dispatch(setLoading(true));
		const res = await API.post("/api/auth", body);
		const { token } = res.data;
		if (token) {
			setAuthToken(token);
			dispatch(loadUser());
			dispatch(setToken(token));
		}
	} catch (err) {
		const errors = err.response.data.error;
		console.log(errors);
		dispatch(setError());
	}
};

//Logout
export const logout = () => (dispatch) => {
	dispatch(setLoading(true));
	dispatch(setLogout());
};
