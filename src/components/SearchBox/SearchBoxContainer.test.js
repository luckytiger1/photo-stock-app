import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import { SearchBoxContainer } from './SearchBoxContainer';

it('<SearchBoxContainer /> renders correctly', () => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
  const mockEnterKey = jest.fn();
  expect(
    shallow(<SearchBoxContainer handleEnterKey={mockEnterKey} />),
  ).toMatchSnapshot();
});
