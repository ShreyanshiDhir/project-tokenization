import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector,useDispatch } from "react-redux";
import {logout} from '../../store/auth'
const Navbar = (props) => {
	const dispatch = useDispatch();
	const { isAuthenticated, user } = useSelector(
		(state) => ({
			isAuthenticated: state.auth.isAuthenticated,
			user: state.auth.user,
		}),
		shallowEqual
	);
	return (
		<header className='header'>
			<h1 className='logo'>
				<Link to='/'>ReactAuth</Link>
			</h1>
			<ul className='main-nav'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				{isAuthenticated ? (
					<>
						{user && (<li>
							<a>{user.name}</a>
						</li>)}
						<li>
							<Link to='/dashboard'>Dashboard</Link>
						</li>
						<li>
							<Link onClick={() => dispatch(logout())}>
								Logout
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to='/login'>Login</Link>
						</li>
						<li>
							<Link to='/register'>Register</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	);
};

Navbar.propTypes = {};

export default Navbar;
