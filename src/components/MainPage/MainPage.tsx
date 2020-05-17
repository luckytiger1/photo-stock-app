import React from 'react';
import ConnectedSearchBoxContainer from '../SearchBox/SearchBoxContainer';
import ConnectedGalleryContainer from '../Gallery/GalleryContainer';

const MainPage: React.FC = () => {
  return (
    <div>
      <ConnectedSearchBoxContainer />
      <ConnectedGalleryContainer />
    </div>
  );
};

export default MainPage;
