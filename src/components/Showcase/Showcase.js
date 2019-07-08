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
						class='carousel slide col col-md-8 justify-content-center align-items center'
						data-ride='carousel'
					>
						<ol class='carousel-indicators'>
							<li data-target='#carouselExampleIndicators' data-slide-to='0' class='active' />
							<li data-target='#carouselExampleIndicators' data-slide-to='1' />
							<li data-target='#carouselExampleIndicators' data-slide-to='2' />
						</ol>
						<div class='carousel-inner'>
							<div class='carousel-item active'>
								<img class='d-block w-100 img-fluid' src={faceImg} alt='...' />
								<div class='carousel-caption '>
									<h5>Face Detection</h5>
									<p>Complex algorithm to allow detection of faces in any image</p>
								</div>
							</div>
							<div class='carousel-item'>
								<img class='d-block w-100 img-fluid' src={demographicsImg} alt='...' />
								<div class='carousel-caption '>
									<h5>Detailed Demographics</h5>
									<p>Get predictions on the gender, ethnicity and age</p>
								</div>
							</div>
							<div class='carousel-item'>
								<img class='d-block w-100' src={freeImg} alt='...' />
								<div class='carousel-caption '>
									<h5>Completely Free</h5>
									<p>The service is completely free. Register using your email address</p>
								</div>
							</div>
						</div>
						<a
							class='carousel-control-prev'
							href='#carouselExampleIndicators'
							role='button'
							data-slide='prev'
						>
							<span class='carousel-control-prev-icon' aria-hidden='true' />
							<span class='sr-only'>Previous</span>
						</a>
						<a
							class='carousel-control-next'
							href='#carouselExampleIndicators'
							role='button'
							data-slide='next'
						>
							<span class='carousel-control-next-icon' aria-hidden='true' />
							<span class='sr-only'>Next</span>
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
