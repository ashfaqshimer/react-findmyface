import React, { Component } from 'react';
import './FaceDetection.css';

export default class FaceDetection extends Component {
	render() {
		return (
			<div className='FaceDetection'>
				<div className='row'>
					<img className='col-md-6 img-fluid' src={this.props.imgUrl} alt={this.props.imgUrl} />
					<div className='col-md-6 info'>Info displayed here</div>
				</div>
			</div>
		);
	}
}
