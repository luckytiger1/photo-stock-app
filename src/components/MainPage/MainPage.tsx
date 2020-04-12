import React from 'react';
import ConnectedSearchBoxContainer from '../SearchBox/SearchBoxContainer';
import ConnectedGalleryContainer from '../Gallery/GalleryContainer';

const MainPage = () => {
  return (
    <div>
      <ConnectedSearchBoxContainer />
      <ConnectedGalleryContainer />
    </div>
  );
};

export default MainPage;
