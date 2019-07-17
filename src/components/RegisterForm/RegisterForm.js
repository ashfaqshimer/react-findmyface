import React, { Component } from 'react';
import './RegisterForm.css';
import { Link } from 'react-router-dom';

export default class RegisterForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '', email: '', password: '', password2: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	handleSubmit(evt) {
		evt.preventDefault();
		if (this.state.password !== this.state.password2) {
			console.log("Passwords don't match");
		} else {
			this.props.handleRegister(this.state);
		}
	}

	render() {
		return (
			<main id='RegisterForm' className='pa4 black-80 shadow-5'>
				<form className='measure center' onSubmit={this.handleSubmit}>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f4 fw6 ph0 mh0 text-info border-bottom p-2'>Register</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='name'>
								Name
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='text'
								name='name'
								id='name'
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='email-address'>
								Email
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='email'
								name='email'
								id='email-address'
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' htmlFor='password'>
								Password
							</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password'
								id='password'
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' htmlFor='password2'>
								Confirm Password
							</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password2'
								id='password2'
								value={this.state.password2}
								onChange={this.handleChange}
							/>
						</div>
					</fieldset>
					<div className=''>
						<input
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
							value='Register'
						/>
					</div>
					<div className='lh-copy mt3'>
						<small className='text-warning'>Already have an Account? </small>
						<Link exact to='/signin' className='f6 link dim form-link'>
							Sign In
						</Link>
					</div>
				</form>
			</main>
		);
	}
}
