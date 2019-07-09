import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './NavBar.css';
import Logo from '../Logo/Logo';

export default class NavBar extends Component {
	constructor(props) {
		super(props);
		this.handleSignOut = this.handleSignOut.bind(this);
	}

	handleSignOut(evt) {
		this.props.handleSignOut();
	}

	render() {
		let navLinks = null;
		if (this.props.isSignedIn) {
			navLinks = (
				<Nav className='navlinks ml-auto'>
					<NavLink
						activeClassName='active'
						className='mx-3 nav-link link'
						onClick={this.handleSignOut}
					>
						Sign Out
					</NavLink>
				</Nav>
			);
		} else {
			navLinks = (
				<Nav className='navlinks ml-auto'>
					<NavLink activeClassName='active' className='mx-3 nav-link link' exact to='/register'>
						Register
					</NavLink>
					<NavLink activeClassName='active' className='mx-3 nav-link link' exact to='/signin'>
						Sign In
					</NavLink>
				</Nav>
			);
		}

		return (
			<Navbar id='NavBar' variant='dark' expand='md'>
				<NavLink
					className='logo navbar-brand text-white border border-success p-2'
					exact
					to={this.props.isSignedIn ? '/user' : '/'}
				>
					<Logo />
				</NavLink>

				<Navbar.Toggle aria-controls='NavBar-collapse' />
				<Navbar.Collapse id='NavBar-collapse'>{navLinks}</Navbar.Collapse>
			</Navbar>
		);
	}
}
