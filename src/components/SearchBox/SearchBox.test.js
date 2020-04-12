import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import SearchBox from './SearchBox';

it('<SearchBox /> renders correctly', () => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
  const mockEnterKey = jest.fn();
  expect(
    shallow(<SearchBox handleEnterKey={mockEnterKey} />),
  ).toMatchSnapshot();
});
