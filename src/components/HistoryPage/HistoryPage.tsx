import React from 'react';
import './HistoryPage.scss';
import HistoryList from '../HistoryList/HistoryList';
import GalleryContainer from '../Gallery/GalleryContainer';

const HistoryPage: React.FC = () => {
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
};

export default HistoryPage;
