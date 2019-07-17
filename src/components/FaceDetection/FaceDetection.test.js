import React, { Component } from 'react';
import { shallow } from 'enzyme';
import FaceDetection from './FaceDetection';

it('renders the component', () => {
	shallow(<FaceDetection />);
});
