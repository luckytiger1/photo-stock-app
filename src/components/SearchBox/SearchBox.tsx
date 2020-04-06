import React from 'react';
import { connect } from 'react-redux';
import { setTerm } from '../../redux/actions/fetchImages';
import { resetPage } from '../../redux/actions/advancePage';
import './SearchBox.scss';
import HistoryList from '../HistoryList/HistoryList';

interface SearchBoxProps {
  handleSearch: (data: string) => void;
  resetPageCount: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  handleSearch,
  resetPageCount,
}) => {
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      resetPageCount();
      handleSearch((e.target as HTMLInputElement).value);
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
  resetPageCount: resetPage,
};

export default connect(null, mapDispatchToProps)(SearchBox);
