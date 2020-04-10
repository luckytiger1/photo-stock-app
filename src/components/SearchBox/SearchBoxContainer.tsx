import React from 'react';
import { connect } from 'react-redux';
import { setTerm } from '../../redux/actions/fetchImages';
import { resetPage } from '../../redux/actions/advancePage';
import './SearchBox.scss';
import SearchBox from './SearchBox';

interface SearchBoxContainerProps {
  handleSearch: (data: string) => void;
  resetPageCount: () => void;
}

const SearchBoxContainer: React.FC<SearchBoxContainerProps> = ({
  handleSearch,
  resetPageCount,
}) => {
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      resetPageCount();
      handleSearch((e.target as HTMLInputElement).value);
    }
  };
  return <SearchBox handleEnterKey={handleEnterKey} />;
};

const mapDispatchToProps = {
  handleSearch: setTerm,
  resetPageCount: resetPage,
};

export default connect(null, mapDispatchToProps)(SearchBoxContainer);
