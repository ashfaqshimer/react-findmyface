import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Particles from 'react-particles-js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import { Container } from 'react-bootstrap';
import Rank from './components/Rank/Rank';

function App() {
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
				<ImageLinkForm />
			</Container>
		</div>
	);
}

export default App;
