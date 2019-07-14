import React, { Component } from 'react';
import './FaceDetection.css';

export default class FaceDetection extends Component {
	render() {
		const { faces } = this.props;
		// const { topRow, leftCol, bottomRow, rightCol } = this.props.coordinates;
		// const { age, gender, ethnicity } = this.props.info;
		return (
			<div className='FaceDetection'>
				<div className='row d-flex justify-content-center align-items-center'>
					<div className='img-display col-md-6'>
						<img
							id='displayImg'
							// className='img-fluid'
							src={this.props.imgUrl}
							alt={this.props.imgUrl}
						/>
						{faces.map(face => {
							return (
								<div
									key={Math.random()}
									className='bounding-box'
									style={{
										top: face.boxObject.topRow,
										bottom: face.boxObject.bottomRow,
										left: face.boxObject.leftCol,
										right: face.boxObject.rightCol
									}}
								/>
							);
						})}
					</div>
				</div>
				<hr />
				<div className='row'>
					<div className='info col'>
						<h1 className='display-4 text-center'>Predicted Information</h1>
						{faces.map(face => {
							return (
								<div key={Math.random()} className='text-left'>
									<p>
										Age :{' '}
										<span className='text-white lead text-uppercase'>{face.infoObject.age}</span>
									</p>
									<p>
										Gender :{' '}
										<span className='text-white lead text-uppercase'>{face.infoObject.gender}</span>
									</p>
									<p>
										Ethnicity :{' '}
										<span className='text-white lead text-uppercase'>
											{face.infoObject.ethnicity}
										</span>
									</p>
									<hr />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
