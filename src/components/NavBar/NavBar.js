import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import './NavBar.css';
import Logo from '../Logo/Logo';

export default class NavBar extends Component {
	render() {
		return (
			<Navbar id='NavBar' variant='dark' expand='md'>
				<Navbar.Brand className='logo text-white border border-success p-2' href='#home'>
					<Logo />
					{/* <i class='far fa-smile text-success' /> FindMy<span className='text-info'>Face</span> */}
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='NavBar-collapse' />
				<Navbar.Collapse id='NavBar-collapse'>
					<Nav className='navlinks ml-auto'>
						<Nav.Link className='link mx-3' href='#home'>
							Sign Out
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
