import React, { Component } from 'react';
import './FaceDetection.css';

export default class FaceDetection extends Component {
	render() {
		const { topRow, leftCol, bottomRow, rightCol } = this.props.coordinates;
		const { age, gender, ethnicity } = this.props.info;
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
					<div className='col-md-6 info text-left'>
						<h1>Predicted Information</h1>
						<p>
							Age : <span className='text-white lead text-uppercase'>{age}</span>
						</p>
						<p>
							Gender : <span className='text-white lead text-uppercase'>{gender}</span>
						</p>
						<p>
							Ethnicity : <span className='text-white lead text-uppercase'>{ethnicity}</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
