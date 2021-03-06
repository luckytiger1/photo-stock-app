import React from 'react';
import HistoryListContainer from '../HistoryList/HistoryListContainer';

interface SearchBoxProps {
  handleEnterKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ handleEnterKey }) => {
  return (
    <div className="search-box">
      <div className="input-field text-center ">
        <label htmlFor="search-input">
          <input
            type="text"
            placeholder="Search"
            id="search-input"
            onKeyDown={handleEnterKey}
          />
        </label>
      </div>
      <HistoryListContainer />
    </div>
  );
};

export default SearchBox;
