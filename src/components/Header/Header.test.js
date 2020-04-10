import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import { Header } from './Header';

beforeEach(() => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
});

it('<Header /> renders correctly if match.isExact is true', () => {
  const mockMatch = {
    isExact: true,
  };
  expect(shallow(<Header match={mockMatch} />)).toMatchSnapshot();
});
it('<Header /> renders correctly if match.isExact is false', () => {
  const mockMatch = {
    isExact: false,
  };
  expect(shallow(<Header match={mockMatch} />)).toMatchSnapshot();
});
