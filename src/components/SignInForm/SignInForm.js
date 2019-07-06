import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignInForm.css';

export default class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.handleSignIn(true);
	}

	render() {
		return (
			<main id='SignInForm' className='pa4 black-80 shadow-5'>
				<form className='measure center' onSubmit={this.handleSubmit}>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f4 fw6 ph0 mh0'>Sign In</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' for='email-address'>
								Email
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='email'
								name='email-address'
								id='email-address'
							/>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' for='password'>
								Password
							</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password'
								id='password'
							/>
						</div>
					</fieldset>
					<div className=''>
						<input
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib'
							type='submit'
							value='Sign in'
						/>
					</div>
					<div className='lh-copy mt3'>
						<small className='text-warning'>Don't have an Account? </small>
						<Link to='/register' className='f6 link dim form-link'>
							Register
						</Link>
					</div>
				</form>
			</main>
		);
	}
}
