import React, { Component } from 'react';
import './ImageLinkForm.css';

export default class ImageLinkForm extends Component {
	render() {
		return (
			<div className='ImageLinkForm'>
				<form>
					<div className='form-group row'>
						<label for='url' className='col-sm-2 col-form-label'>
							Enter URL:
						</label>
						<div className='input-group col-sm-10'>
							<input type='text' className='form-control' id='url' placeholder='URL' />
							<div className='input-group-append'>
								<button className='btn btn-success'>Find Face</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
