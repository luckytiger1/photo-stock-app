import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import UserInfo from './UserInfo';

let mockImage;

beforeEach(() => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
  mockImage = {
    user: {
      profile_image: {
        small: 'image.jpg',
      },
      name: 'Dan',
      instagram_username: 'DanS',
      username: 'DanDan',
    },
  };
});

it('<UserInfo /> renders correctly', () => {
  expect(shallow(<UserInfo image={mockImage} />)).toMatchSnapshot();
});
