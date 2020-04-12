import React from 'react';
import './HistoryPage.scss';
import HistoryListContainer from '../HistoryList/HistoryListContainer';
import GalleryContainer from '../Gallery/GalleryContainer';

const HistoryPage: React.FC = () => {
  return (
    <>
      <div className="history-page">
        <div className="history-page__title">
          <h2>Your requests</h2>
        </div>
        <HistoryListContainer />
      </div>
      <GalleryContainer />
    </>
  );
};

export default HistoryPage;
