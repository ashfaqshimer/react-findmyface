import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Showcase extends Component {
	render() {
		return (
			<div>
				Background image with overlay and about
				<Link className='btn btn-info' exact to='/register'>
					Register
				</Link>
			</div>
		);
	}
}
