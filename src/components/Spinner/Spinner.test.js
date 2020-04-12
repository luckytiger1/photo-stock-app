import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import Spinner from './Spinner';

it('<SearchBox /> renders correctly', () => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
  expect(shallow(<Spinner />)).toMatchSnapshot();
});
