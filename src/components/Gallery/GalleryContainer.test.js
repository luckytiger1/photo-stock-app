import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import { GalleryContainer } from './GalleryContainer';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
describe('GalleryContainer', () => {
  const mockMatch = {
    path: '/favorites',
  };
  it('renders correctly', () => {
    expect(shallow(<GalleryContainer match={mockMatch} />)).toMatchSnapshot();
  });
});
