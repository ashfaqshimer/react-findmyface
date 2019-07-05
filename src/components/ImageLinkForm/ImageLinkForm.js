import React, { Component } from 'react';
import './ImageLinkForm.css';

export default class ImageLinkForm extends Component {
	constructor(props) {
		super(props);
		this.state = { url: '' };
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInput(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		if (this.state.url.trim().length === 0) {
			alert('nothing entered');
		} else {
			this.props.handleDetect(this.state.url.trim());
		}
	}
	render() {
		return (
			<div className='ImageLinkForm'>
				<p className='lead text-warning'>
					This app will detect faces in your pictures. Give it a try.
				</p>
				<form>
					<div className='form-group row'>
						<label htmlFor='urlInput' className='col-md-2 col-form-label'>
							Enter URL:
						</label>
						<div className='input-group col-md-10'>
							<input
								type='text'
								className='form-control'
								id='urlInput'
								name='url'
								placeholder='URL'
								value={this.state.url}
								onChange={this.handleInput}
							/>
							<div className='input-group-append'>
								<button className='btn btn-success' onClick={this.handleSubmit}>
									Detect Face
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
