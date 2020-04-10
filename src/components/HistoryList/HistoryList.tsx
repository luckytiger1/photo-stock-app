import React from 'react';

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
        {searchHistory.reverse().map((element: string, index: number) => {
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

export default HistoryList;
