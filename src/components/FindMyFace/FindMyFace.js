import React, { Component } from 'react';
import Clarifai from 'clarifai';
import { Container } from 'react-bootstrap';
import './FindMyFace.css';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import FaceDetection from '../FaceDetection/FaceDetection';
import Footer from '../Footer/Footer';

const API_KEY = 'af652418b23a4cb7aa3a525e3f0a266e';

const app = new Clarifai.App({
	apiKey: API_KEY
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl: null,
			coordinates: {},
			info: {}
		};
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
					if (response) {
						fetch('http://localhost:3000/image', {
							method: 'put',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({ id: this.props.id })
						})
							.then(response => response.json())
							.then(count => {
								console.log(count);
								this.props.updateEntries(count);
							});
					}
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
		return { boxObject: boxObject, infoObject: infoObject };
	}

	displayData(dataObjects) {
		this.setState({ coordinates: dataObjects.boxObject, info: dataObjects.infoObject });
	}

	render() {
		return (
			<div className='App'>
				<Rank name={this.props.name} entries={this.props.entries} />
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
