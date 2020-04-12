import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import NavItem from './NavItem';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
it('<NavItem /> renders correctly', () => {
  const mockIsMobile = true;
  const mockIcon = 'whale.png';
  const mockAlt = 'whale pic';
  const mockClsName = 'logo';
  expect(
    shallow(
      <NavItem
        isMobile={mockIsMobile}
        icon={mockIcon}
        alt={mockAlt}
        clsName={mockClsName}
      />,
    ),
  ).toMatchInlineSnapshot(`
  <div
    className="logo"
  >
    <img
      alt="whale pic"
      src="whale.png"
    />
  </div>
  `);
});

it('<NavItem /> renders correctly', () => {
  const mockIsMobile = false;
  const mockIcon = 'whale.png';
  const mockAlt = 'whale pic';
  const mockClsName = 'logo';
  expect(
    shallow(
      <NavItem
        isMobile={mockIsMobile}
        icon={mockIcon}
        alt={mockAlt}
        clsName={mockClsName}
      />,
    ),
  ).toMatchInlineSnapshot(`
  <div
    className="logo"
  >
    <img
      alt="whale pic"
      className="logo-icon"
      src="whale.png"
    />
    <span
      className="logo-text"
    />
  </div>
`);
});
