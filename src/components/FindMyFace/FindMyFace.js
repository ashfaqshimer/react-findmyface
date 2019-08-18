import React, { Component } from 'react';
import Clarifai from 'clarifai';
import { Container } from 'react-bootstrap';
import './FindMyFace.css';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import Rank from '../Rank/Rank';
import FaceDetection from '../FaceDetection/FaceDetection';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
import Profile from '../Profile/Profile';

const API_KEY = 'af652418b23a4cb7aa3a525e3f0a266e';

const app = new Clarifai.App({
	apiKey : API_KEY
});

class FindMyFace extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl      : null,
			coordinates : {},
			info        : {},
			faces       : []
		};
		this.handleDetect = this.handleDetect.bind(this);
		this.calculateData = this.calculateData.bind(this);
		this.displayData = this.displayData.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleDetect(imgUrl) {
		this.setState({ imgUrl }, () => {
			app.models
				.predict(
					Clarifai.DEMOGRAPHICS_MODEL,
					// URL
					this.state.imgUrl
				)
				.then((response) => {
					// do something with response
					if (response) {
						fetch('https://rocky-gorge-58879.herokuapp.com/image', {
							method  : 'put',
							headers : { 'Content-Type': 'application/json' },
							body    : JSON.stringify({ id: this.props.id })
						})
							.then((response) => response.json())
							.then((count) => {
								this.props.updateEntries(count);
							});
					}
					this.displayData(this.calculateData(response));
				})
				.catch((err) => {
					console.log('There has been an error', err);
				});
		});
	}

	calculateData(response) {
		return response.outputs[0].data.regions.map((face) => {
			const boundingBox = face.region_info.bounding_box;
			const img = document.getElementById('displayImg');
			const width = img.width;
			const height = img.height;
			const boxObject = {
				topRow    : boundingBox.top_row * height,
				leftCol   : boundingBox.left_col * width,
				bottomRow : height - boundingBox.bottom_row * height,
				rightCol  : width - boundingBox.right_col * width
			};

			const data = face.data.face;
			const infoObject = {
				age       : data.age_appearance.concepts[0].name,
				gender    : data.gender_appearance.concepts[0].name,
				ethnicity : data.multicultural_appearance.concepts[0].name
			};
			return { boxObject: boxObject, infoObject: infoObject };
		});
	}

	displayData(faces) {
		// console.log(dataObjects);
		this.setState({ faces });
	}

	toggleModal() {
		this.props.toggleModal();
	}

	render() {
		const { imgUrl, faces } = this.state;
		const { isProfileOpen, id, name, entries } = this.props;

		return (
			<div className='App'>
				{isProfileOpen && (
					<Modal>
						<Profile
							isProfileOpen={isProfileOpen}
							toggleModal={this.toggleModal}
							id={id}
							name={name}
							entries={entries}
						/>
					</Modal>
				)}
				<Rank name={this.props.name} entries={this.props.entries} />
				<Container className='form-container'>
					<ImageLinkForm handleDetect={this.handleDetect} />
					{this.state.imgUrl ? <FaceDetection faces={faces} imgUrl={imgUrl} /> : null}
				</Container>
				<Footer />
			</div>
		);
	}
}

export default FindMyFace;
