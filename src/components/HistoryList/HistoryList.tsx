import React from 'react';
import { connect } from 'react-redux';
import './HistoryList.scss';
import { withRouter } from 'react-router-dom';

const HistoryList = ({ searchHistory, match }: any) => {
  return (
    <div className="history-list d-flex justify-content-around">
      <div
        className={
          match.url === '/history'
            ? 'history-list-container-history'
            : 'history-list-container-main'
        }
      >
        {searchHistory.reverse().map((element: any, index: any) => {
          return (
            <span className="px-3 history-list-item" key={index.toString()}>
              {element}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({ imageList: { searchHistory } }: any) => {
  return {
    searchHistory,
  };
};

export default withRouter(connect(mapStateToProps)(HistoryList));
