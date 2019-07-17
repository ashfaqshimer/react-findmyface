import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Showcase.css';
import demographicsImg from '../../img/demographics.jpg';
import faceImg from '../../img/face_detection.jpg';
import freeImg from '../../img/free.jpg';

export default class Showcase extends Component {
	render() {
		return (
			<div className='Showcase container'>
				<div className='row'>
					<div
						id='carouselExampleIndicators'
						className='carousel slide col col-md-8 justify-content-center align-items center'
						data-ride='carousel'
					>
						<ol className='carousel-indicators'>
							<li data-target='#carouselExampleIndicators' data-slide-to='0' className='active' />
							<li data-target='#carouselExampleIndicators' data-slide-to='1' />
							<li data-target='#carouselExampleIndicators' data-slide-to='2' />
						</ol>
						<div className='carousel-inner'>
							<div className='carousel-item active'>
								<img className='d-block w-100 img-fluid' src={faceImg} alt='...' />
								<div className='carousel-caption '>
									<h5>Face Detection</h5>
									<p>Complex algorithm to allow detection of faces in any image</p>
								</div>
							</div>
							<div className='carousel-item'>
								<img className='d-block w-100 img-fluid' src={demographicsImg} alt='...' />
								<div className='carousel-caption '>
									<h5>Detailed Demographics</h5>
									<p>Get predictions on the gender, ethnicity and age</p>
								</div>
							</div>
							<div className='carousel-item'>
								<img className='d-block w-100' src={freeImg} alt='...' />
								<div className='carousel-caption '>
									<h5>Completely Free</h5>
									<p>The service is completely free. Register using your email address</p>
								</div>
							</div>
						</div>
						<a
							className='carousel-control-prev'
							href='#carouselExampleIndicators'
							role='button'
							data-slide='prev'
						>
							<span className='carousel-control-prev-icon' aria-hidden='true' />
							<span className='sr-only'>Previous</span>
						</a>
						<a
							className='carousel-control-next'
							href='#carouselExampleIndicators'
							role='button'
							data-slide='next'
						>
							<span className='carousel-control-next-icon' aria-hidden='true' />
							<span className='sr-only'>Next</span>
						</a>
					</div>
				</div>
				<Link className='btn btn-outline-light btn-lg mt-2' exact to='/register'>
					Register
				</Link>
			</div>
		);
	}
}
