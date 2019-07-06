import React, { Component } from 'react';
import './RegisterForm.css';
import { Link } from 'react-router-dom';

export default class RegisterForm extends Component {
	render() {
		return (
			<main id='RegisterForm' className='pa4 black-80 shadow-5'>
				<form className='measure center'>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f4 fw6 ph0 mh0'>Register</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' for='name'>
								Name
							</label>
							<input
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='text'
								name='name'
								id='name'
							/>
						</div>
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
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' for='password2'>
								Confirm Password
							</label>
							<input
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password2'
								id='password2'
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
