import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

import './ProfileMenu.css';

class ProfileMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownOpen : false
		};
		this.toggle = this.toggle.bind(this);
		this.handleSignOut = this.handleSignOut.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	toggle() {
		this.setState((prevState) => ({
			dropdownOpen : !prevState.dropdownOpen
		}));
	}

	toggleModal() {
		this.toggle();
		this.props.toggleModal();
	}

	handleSignOut() {
		this.toggle();
		this.props.signOut();
	}

	render() {
		return (
			<div className='tc pa1 ProfileMenu'>
				<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
					<DropdownToggle
						tag='span'
						data-toggle='dropdown'
						onClick={this.toggle}
						aria-expanded={this.state.dropdownOpen}
					>
						<img
							src='http://tachyons.io/img/logo.jpg'
							className='br-100 pa1 ba b--black-10 h3 w3 grow'
							alt='avatar'
						/>
					</DropdownToggle>
					<DropdownMenu className='b--transparent' right>
						<DropdownItem header className='text-info'>
							{this.props.name}
						</DropdownItem>
						<DropdownItem onClick={this.toggleModal}>View Profile</DropdownItem>
						<DropdownItem divider />
						<DropdownItem onClick={this.handleSignOut}>Sign Out</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		);
	}
}

export default ProfileMenu;
