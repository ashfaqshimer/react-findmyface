import React, { Component } from 'react';

export default class Rank extends Component {
	static defaultProps = {
		name: 'John Doe',
		entries: 'no'
	};

	render() {
		return (
			<div className='text-white mt-5'>
				<h1>
					<span className='name-span text-success'>{this.props.name}</span>, you have made{' '}
					{this.props.entries} detects!
				</h1>
			</div>
		);
	}
}
