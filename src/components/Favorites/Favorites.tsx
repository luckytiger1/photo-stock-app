import React from 'react';
import GalleryContainerWithRouter from '../Gallery/GalleryContainer';
import './Favorites.scss';

const Favorites: React.FC = () => {
  return (
    <div className="favorites-container">
      <div className="favorites-title">
        <h2 className="text-center">Favorites</h2>
      </div>
      <GalleryContainerWithRouter />
    </div>
  );
};

export default React.memo(Favorites);
