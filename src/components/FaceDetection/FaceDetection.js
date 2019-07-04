import React, { Component } from 'react';
import './FaceDetection.css';

export default class FaceDetection extends Component {
	render() {
		const { topRow, leftCol, bottomRow, rightCol } = this.props.coordinates;
		return (
			<div className='FaceDetection'>
				<div className='row'>
					<div className='col-md-6'>
						<img
							id='displayImg'
							className='img-fluid'
							src={this.props.imgUrl}
							alt={this.props.imgUrl}
						/>
						<div
							className='bounding-box'
							style={{ top: topRow, bottom: bottomRow, left: leftCol, right: rightCol }}
						/>
					</div>
					<div className='col-md-6 info'>Info displayed here</div>
				</div>
			</div>
		);
	}
}
