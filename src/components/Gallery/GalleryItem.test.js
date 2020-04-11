import React from 'react';
import { shallow } from 'enzyme';
import { createSerializer } from 'enzyme-to-json';
import { GalleryItem } from './GalleryItem';

let mockImage;

beforeEach(() => {
  expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
  mockImage = {
    id: 'Shj3j4',
    urls: {
      small: 'image.png',
    },
    links: {
      download: 'downloadImg.com',
    },
  };
});

describe('GalleryItem', () => {
  it('<GalleryItem /> renders all info if match path is not photoId', () => {
    const mockMatch = {
      path: '/favorites',
    };
    expect(
      shallow(<GalleryItem match={mockMatch} image={mockImage} />),
    ).toMatchSnapshot();
  });
  it("<GalleryItem /> doesn't render all info if match path is photoId", () => {
    const mockMatch = {
      path: '/:photoId',
    };
    expect(
      shallow(<GalleryItem match={mockMatch} image={mockImage} />),
    ).toMatchSnapshot();
  });
  it('should render self and subcomponents', () => {
    const mockMatch = {
      path: '/favorites',
    };
    const mockAddToFavorites = {
      updateFavorites: jest.fn(),
    };
    const mockHistory = ['a', 'b'];
    const enzymeWrapper = shallow(
      <GalleryItem
        match={mockMatch}
        image={mockImage}
        updateFavorites={mockAddToFavorites.updateFavorites}
        history={mockHistory}
      />,
    );
    expect(enzymeWrapper.find('LikeBtn')).toHaveLength(1);
    enzymeWrapper
      .find('LikeBtn')
      .props()
      .addToFavorites({ id: '1', url: 'image1.png' });
    expect(mockAddToFavorites.updateFavorites.mock.calls.length).toBe(1);
    enzymeWrapper.find('button').simulate('click');
    expect(mockHistory.length).toBe(3);
  });
});
