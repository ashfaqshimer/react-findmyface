import React, { Component } from 'react';
import { Jumbotron, Button, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './Profile.css';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { isProfileOpen, toggleModal, id, name, entries } = this.props;
		return (
			<div className='Profile'>
				<Jumbotron>
					<Button close onClick={toggleModal} />
					<h1 className='display-3'>Hello, {name}</h1>
					<p className='lead'>
						Your user ID is: <strong>{id}</strong>
					</p>
					<p className='lead'>
						Images submitted: <strong>{entries}</strong>
					</p>
					<hr className='my-2' />
					<h3>Update Name</h3>
					<InputGroup>
						<Input placeholder='username' />
						<InputGroupAddon addonType='append'>
							<Button color='success'>Update</Button>
						</InputGroupAddon>
					</InputGroup>
					<hr className='my-3' />
					<Button color='danger' onClick={toggleModal}>
						Close
					</Button>
				</Jumbotron>
			</div>
		);
	}
}

export default Profile;
