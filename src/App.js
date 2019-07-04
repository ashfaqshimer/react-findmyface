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
		this.state = { imgUrl: null };
		this.handleDetect = this.handleDetect.bind(this);
	}
	handleDetect(imgUrl) {
		console.log(imgUrl);
		this.setState({ imgUrl }, () => {
			app.models
				.predict(
					Clarifai.DEMOGRAPHICS_MODEL,
					this.state.imgUrl
					// URL
					// 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
				)
				.then(response => {
					// do something with responseconsole.log(response);
					console.log(response);
				})
				.catch(err => {
					console.log(err);
				});
		});
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
					{this.state.imgUrl ? <FaceDetection imgUrl={this.state.imgUrl} /> : null}
				</Container>
				<Footer />
			</div>
		);
	}
}

export default App;
