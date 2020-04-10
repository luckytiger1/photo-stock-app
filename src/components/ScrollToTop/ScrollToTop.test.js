import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import ScrollToTop from './ScrollToTop';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
jest.mock('react-router-dom', () => ({
  __esModule: true,
  useLocation: jest.fn().mockReturnValue({
    pathname: '/favorites',
    search: '',
    hash: '',
    state: null,
    key: '5nvxpbdafa',
  }),
}));
it('<ScrollToTop /> renders correctly', () => {
  expect(shallow(<ScrollToTop />)).toMatchSnapshot();
});
