import React from 'react';
import { connect } from 'react-redux';
import { setTerm } from '../../redux/actions/fetchImages';
import './SearchBox.scss';
import HistoryList from '../HistoryList/HistoryList';

const SearchBox = ({ handleSearch }: any) => {
  const handleEnterKey = (e: any) => {
    if (e.key === 'Enter') {
      handleSearch(e.target.value);
    }
  };
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
      <HistoryList />
    </div>
  );
};

const mapDispatchToProps = {
  handleSearch: setTerm,
};

export default connect(null, mapDispatchToProps)(SearchBox);
