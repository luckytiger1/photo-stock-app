import React from 'react';
import './Favorites.scss';
import GalleryContainer from '../Gallery/GalleryContainer';
// import GalleryContainer from '../Gallery/GalleryContainer';

export default function Favorites() {
  return (
    <div className="favorites-container">
      <div className="favorites-title">
        <h2 className=" text-center">Favorites</h2>
      </div>
      <GalleryContainer />
    </div>
  );
}
