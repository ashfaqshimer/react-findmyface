import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import FindMyFace from './components/FindMyFace/FindMyFace';
import Showcase from './components/Showcase/Showcase';
import RegisterForm from './components/RegisterForm/RegisterForm';
import SignInForm from './components/SignInForm/SignInForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSignedIn: false
		};
		this.handleSignIn = this.handleSignIn.bind(this);
	}
	handleSignIn(signedIn) {
		if (signedIn) {
			this.setState({ isSignedIn: true }, () => this.props.history.push('/user'));
		} else {
			this.setState({ isSignedIn: false }, () => this.props.history.push('/'));
		}
	}
	render() {
		const checkSignIn = props => {
			if (this.state.isSignedIn) {
				return <FindMyFace {...props} />;
			} else {
				this.props.history.push('/signin');
			}
		};
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
				<NavBar isSignedIn={this.state.isSignedIn} handleSignOut={this.handleSignIn} />
				<Switch>
					<Route exact path='/' render={() => <Showcase />} />
					<Route exact path='/register' render={() => <RegisterForm />} />
					<Route
						exact
						path='/signin'
						render={() => <SignInForm handleSignIn={this.handleSignIn} />}
					/>
					<Route exact path='/user' render={checkSignIn} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
