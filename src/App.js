import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Switch, Route, withRouter } from 'react-router-dom';

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
			isSignedIn       : false,
			isProfileOpen    : false,
			registrationData : {},
			userData         : { id: null, name: null, entries: null }
		};
		this.handleSignIn = this.handleSignIn.bind(this);
		this.handleSignOut = this.handleSignOut.bind(this);
		this.handleRegister = this.handleRegister.bind(this);
		this.handleUpdateEntries = this.handleUpdateEntries.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleSignIn(credentials) {
		const { email, password } = credentials;
		fetch('https://rocky-gorge-58879.herokuapp.com/signin', {
			method  : 'post',
			headers : { 'Content-Type': 'application/json' },
			body    : JSON.stringify({ email, password })
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.id) {
					this.setState(
						{
							userData   : { id: data.id, name: data.name, entries: data.entries },
							isSignedIn : true
						},
						() => {
							this.props.history.push('/user');
						}
					);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleSignOut() {
		this.setState({ userData: { id: null, name: null, entries: null }, isSignedIn: false });
	}

	handleRegister(registrationData) {
		const { name, email, password } = registrationData;
		this.setState({ registrationData }, () => {
			fetch('https://rocky-gorge-58879.herokuapp.com/register', {
				method  : 'post',
				headers : { 'Content-Type': 'application/json' },
				body    : JSON.stringify({ email, password, name })
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.id) {
						console.log(data);
						this.props.history.push('/signin');
					}
				})
				.catch((err) => {
					console.log(err);
				});
		});
	}

	handleUpdateEntries(count) {
		this.setState({ userData: { ...this.state.userData, entries: count } });
	}

	toggleModal() {
		this.setState((prevState) => ({
			...prevState,
			isProfileOpen : !prevState.isProfileOpen
		}));
	}

	render() {
		const checkSignIn = (props) => {
			if (this.state.isSignedIn) {
				return (
					<FindMyFace
						{...props}
						id={this.state.userData.id}
						name={this.state.userData.name}
						entries={this.state.userData.entries}
						updateEntries={this.handleUpdateEntries}
						isProfileOpen={this.state.isProfileOpen}
						toggleModal={this.toggleModal}
					/>
				);
			} else {
				this.props.history.push('/signin');
			}
		};
		return (
			<div className='App'>
				<Particles
					className='Particles'
					params={{
						particles     : {
							number : {
								value : 50
							},
							size   : {
								value : 3
							}
						},
						interactivity : {
							events : {
								onhover : {
									enable : true,
									mode   : 'repulse'
								}
							}
						}
					}}
				/>
				<NavBar
					isSignedIn={this.state.isSignedIn}
					handleSignOut={this.handleSignOut}
					name={this.state.userData.name}
					toggleModal={this.toggleModal}
				/>
				<Switch>
					<Route exact path='/' render={() => <Showcase />} />
					<Route
						exact
						path='/register'
						render={() => <RegisterForm handleRegister={this.handleRegister} />}
					/>
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
