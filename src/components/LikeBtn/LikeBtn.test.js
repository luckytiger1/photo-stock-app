import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import LikeBtn from './LikeBtn';

it('<LikeBtn /> renders correctly', () => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
  expect(shallow(<LikeBtn />)).toMatchSnapshot();
});
