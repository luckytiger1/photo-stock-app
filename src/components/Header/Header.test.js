import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import { Header } from './Header';

beforeEach(() => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
});

function setup() {
  const props = {
    match: {
      isExact: true,
    },
  };

  const enzymeWrapper = shallow(<Header match={props.match} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Header component', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('header').hasClass('App-header')).toBe(true);
      expect(enzymeWrapper.find('NavItem')).toHaveLength(3);
      expect(enzymeWrapper.find('NavItem').at(0).props().clsName).toBe('logo');
      expect(
        shallow(<Header match={{ isExact: false }} />).find('NavItem'),
      ).toHaveLength(4);
    });
  });
  describe('<Header /> renders correctly', () => {
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
  });
});
