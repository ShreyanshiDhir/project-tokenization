import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore, current } from "@reduxjs/toolkit";
import rootReducer from "./store/index";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";

const store = configureStore({
	reducer: rootReducer,
});

let currentState = store.getState();
store.subscribe(async () => {
	// keep track of the previous and current state to compare changes
	let previousState = currentState;
	currentState = store.getState();
	//if token changes set the value in localStorage and axios headers
	if (previousState.auth.token !== currentState.auth.token) {
		const token = currentState.auth.token;
		await setAuthToken(token);
	}
});

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
