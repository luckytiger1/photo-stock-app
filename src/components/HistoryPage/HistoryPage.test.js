import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import HistoryPage from './HistoryPage';

it('<HistoryPage /> renders correctly', () => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
  expect(shallow(<HistoryPage />)).toMatchSnapshot();
});
