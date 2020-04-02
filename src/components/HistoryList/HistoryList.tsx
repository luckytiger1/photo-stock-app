import React from 'react';
import { connect } from 'react-redux';
import './HistoryList.scss';

const HistoryList = ({ searchHistory }: any) => {
  return (
    <div className="history-list d-flex justify-content-around">
      <div>
        {searchHistory.map((element: any, index: any) => {
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

export default connect(mapStateToProps)(HistoryList);
