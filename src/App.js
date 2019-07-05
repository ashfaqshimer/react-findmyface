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
import SignInForm from './components/SignInForm/SignInForm';
import RegisterForm from './components/RegisterForm/RegisterForm';

const API_KEY = 'af652418b23a4cb7aa3a525e3f0a266e';

const app = new Clarifai.App({
	apiKey: API_KEY
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { imgUrl: null, coordinates: {}, info: {} };
		this.handleDetect = this.handleDetect.bind(this);
		this.calculateData = this.calculateData.bind(this);
		this.displayData = this.displayData.bind(this);
	}

	handleDetect(imgUrl) {
		this.setState({ imgUrl }, () => {
			app.models
				.predict(
					Clarifai.DEMOGRAPHICS_MODEL,
					// URL
					this.state.imgUrl
				)
				.then(response => {
					// do something with response
					this.displayData(this.calculateData(response));
				})
				.catch(err => {
					console.log('There has been an error', err);
				});
		});
	}

	calculateData(response) {
		const boundingBox = response.outputs[0].data.regions[0].region_info.bounding_box;
		const img = document.getElementById('displayImg');
		const width = img.width;
		const height = img.height;
		const boxObject = {
			topRow: boundingBox.top_row * height,
			leftCol: boundingBox.left_col * width,
			bottomRow: height - boundingBox.bottom_row * height,
			rightCol: width - boundingBox.right_col * width
		};

		const data = response.outputs[0].data.regions[0].data.face;
		const infoObject = {
			age: data.age_appearance.concepts[0].name,
			gender: data.gender_appearance.concepts[0].name,
			ethnicity: data.multicultural_appearance.concepts[0].name
		};
		console.log(infoObject);
		return { boxObject: boxObject, infoObject: infoObject };
	}

	displayData(dataObjects) {
		console.log(dataObjects);
		this.setState({ coordinates: dataObjects.boxObject, info: dataObjects.infoObject });
	}

	render() {
		return (
			<div className='App'>
				<Particles
					className='Particles'
					params={{
						particles: {
							number: {
								value: 50
							},
							size: {
								value: 3
							}
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: 'repulse'
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
						<FaceDetection
							coordinates={this.state.coordinates}
							info={this.state.info}
							imgUrl={this.state.imgUrl}
						/>
					) : null}
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
