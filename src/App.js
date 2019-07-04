import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import { Container } from 'react-bootstrap';
import Rank from './components/Rank/Rank';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Footer from './components/Footer/Footer';
import Clarifai from 'clarifai';

const API_KEY = 'af652418b23a4cb7aa3a525e3f0a266e';

const app = new Clarifai.App({
	apiKey: API_KEY
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { imgUrl: null, coordinates: {} };
		this.handleDetect = this.handleDetect.bind(this);
		this.calculateBoundingBox = this.calculateBoundingBox.bind(this);
		this.displayBoundingBox = this.displayBoundingBox.bind(this);
	}

	handleDetect(imgUrl) {
		console.log(imgUrl);
		this.setState({ imgUrl }, () => {
			app.models
				.predict(
					Clarifai.DEMOGRAPHICS_MODEL,
					// URL
					this.state.imgUrl
				)
				.then(response => {
					// do something with response
					if (response.data) {
						console.log('throw an error');
					}
					console.log(response);
					this.displayBoundingBox(this.calculateBoundingBox(response));
				})
				.catch(err => {
					console.log(err);
				});
		});
	}

	calculateBoundingBox(response) {
		const boundingBox = response.outputs[0].data.regions[0].region_info.bounding_box;
		const img = document.getElementById('displayImg');
		const width = img.width;
		const height = img.height;
		return {
			topRow: boundingBox.top_row * height,
			leftCol: boundingBox.left_col * width,
			bottomRow: height - boundingBox.bottom_row * height,
			rightCol: width - boundingBox.right_col * width
		};
	}

	displayBoundingBox(coordinates) {
		this.setState({ coordinates });
	}

	render() {
		return (
			<div className='App'>
				<Particles
					className='Particles'
					params={{
						particles: {
							line_linked: {
								shadow: {
									enable: true,
									color: '#3CA9D1',
									blur: 5
								}
							}
						}
					}}
				/>
				<NavBar />
				<Rank />
				<Container className='form-container'>
					<ImageLinkForm handleDetect={this.handleDetect} />
					{this.state.imgUrl ? (
						<FaceDetection coordinates={this.state.coordinates} imgUrl={this.state.imgUrl} />
					) : null}
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
