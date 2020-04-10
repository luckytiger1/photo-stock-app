import React from 'react';
import './Favorites.scss';
import GalleryContainer from '../Gallery/GalleryContainer';

const Favorites: React.FC = () => {
  return (
    <div className="favorites-container">
      <div className="favorites-title">
        <h2 className="text-center">Favorites</h2>
      </div>
      <GalleryContainer />
    </div>
  );
};

export default React.memo(Favorites);
