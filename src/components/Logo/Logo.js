import React, { Component } from 'react';
import Tilt from 'react-tilt';

export default class Logo extends Component {
	render() {
		return (
			<div>
				<Tilt className='Tilt' options={{ max: 35 }}>
					<div className='Tilt-inner'>
						{' '}
						<i className='far fa-smile text-success' /> FindMy
						<span className='text-info'>Face</span>{' '}
					</div>
				</Tilt>
			</div>
		);
	}
}
