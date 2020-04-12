import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import ErrorIndicator from './ErrorIndicator';

it('<Favorites /> renders correctly', () => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
  expect(shallow(<ErrorIndicator />)).toMatchSnapshot();
});
