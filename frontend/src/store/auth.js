import { createSlice } from "@reduxjs/toolkit";
import API from "../api/api";
import setAuthToken from "../utils/setAuthToken";
import isEmpty from "../utils/isEmpty";
import Web3 from 'web3';
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
export const registerUser = ({ fname,lname, email},web3,history) => async (dispatch) => {

	
	try {
		dispatch(setLoading(true));
		if (!web3) {
			try {
				// Request account access if needed
				await window.ethereum.enable();
				// We don't know window.web3 version, so we use our own instance of Web3
				// with the injected provider given by MetaMask
				web3 = new Web3(window.ethereum);
			} catch (error) {
				window.alert("You need to allow MetaMask.");
				return;
			}
		}
		const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) {
			window.alert("Please activate MetaMask first.");
			return;
		}
		const publicAddress = coinbase.toLowerCase();
		const body = JSON.stringify({ fname,lname, email,publicAddress});
		console.log(publicAddress);
		const res = await API.post("/api/user", body);
		console.log(res.data)
		if (res.data.user) {
			console.log(res.data);
			history.push('/login');
			dispatch(setLoading(false));
		}
	} catch (err) {
		const errors = err.response.data.error;
		console.log(errors);
		dispatch(setError()); // this makes loading : false
	}
};

// //User login
// export const login = ({ email, password }) => async (dispatch) => {
// 	const body = JSON.stringify({ email, password });
// 	try {
// 		dispatch(setLoading(true));
// 		const res = await API.post("/api/auth", body);
// 		const { token } = res.data;
// 		if (token) {
// 			setAuthToken(token);
// 			dispatch(loadUser());
// 			dispatch(setToken(token));
// 		}
// 	} catch (err) {
// 		const errors = err.response.data.error;
// 		console.log(errors);
// 		dispatch(setError());
// 	}
// };
//
export const metaMaskLogin = (web3,history) => async (dispatch) => {
	try {
		if (!web3) {
			try {
				// Request account access if needed
				await window.ethereum.enable();
				// We don't know window.web3 version, so we use our own instance of Web3
				// with the injected provider given by MetaMask
				web3 = new Web3(window.ethereum);
			} catch (error) {
				window.alert("You need to allow MetaMask.");
				return;
			}
		}
		const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) {
			window.alert("Please activate MetaMask first.");
			return;
		}
		const publicAddress = coinbase.toLowerCase();
		console.log(publicAddress);
		let res = await API.get("/api/user", {
			params: {
				publicAddress,
			},
		});
		console.log(res.data.user);
		let user = res.data.user;
		//handleSignup starts
		if (!user) {
			history.push('/register')
			const body = JSON.stringify({
				publicAddress,
			});
			user = await API.post("/api/user", body);
		}
		console.log(user);
		res = await API.get("/api/user", {
			params: {
				publicAddress,
			},
		});
		user = res.data.user;
		//handleSignature starts
		const signature = await web3.eth.personal.sign(
			`Nonce : ${user.nonce}`,
			publicAddress
		);
		console.log(signature);
		//handleAuthenticate starts
		const body = JSON.stringify({ publicAddress, signature });
		res = await API.post("/api/auth/", body);
		const { token } = res.data;
		console.log(token);
		setAuthToken(token);
		dispatch(loadUser());
		dispatch(setToken(token));
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
