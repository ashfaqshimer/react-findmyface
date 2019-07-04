import React, { Component } from 'react';
import './ImageLinkForm.css';

export default class ImageLinkForm extends Component {
	render() {
		return (
			<div className='ImageLinkForm'>
				<form>
					<div className='form-group row'>
						<label htmlFor='urlInput' className='col-md-2 col-form-label'>
							Enter URL:
						</label>
						<div className='input-group col-md-10'>
							<input type='text' className='form-control' id='urlInput' placeholder='URL' />
							<div className='input-group-append'>
								<button className='btn btn-success'>Detect Face</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
