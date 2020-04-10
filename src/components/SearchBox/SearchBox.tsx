import React from 'react';
import HistoryListContainer from '../HistoryList/HistoryListContainer';

const SearchBox = ({ handleEnterKey }: any) => {
  return (
    <div className="search-box">
      <div className="input-field text-center ">
        <input
          type="text"
          placeholder="Search"
          id="search-input"
          onKeyDown={handleEnterKey}
        />
      </div>
      <HistoryListContainer />
    </div>
  );
};

export default SearchBox;
