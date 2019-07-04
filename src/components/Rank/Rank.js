import React, { Component } from 'react';

export default class Rank extends Component {
	render() {
		return (
			<div className='text-white mt-5'>
				<h1>
					<span className='name-span'>Name</span>, your current rank is...
				</h1>
				<h3>#4</h3>
			</div>
		);
	}
}
