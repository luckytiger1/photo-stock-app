import React from 'react';
import './HistoryPage.scss';
import HistoryList from '../HistoryList/HistoryList';
import GalleryContainer from '../Gallery/GalleryContainer';

export default function HistoryPage() {
  return (
    <>
      <div className="history-page">
        <div className="history-page__title">
          <h2>Your requests</h2>
        </div>
        <HistoryList />
      </div>
      <GalleryContainer />
    </>
  );
}
