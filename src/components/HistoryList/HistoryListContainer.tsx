import React from 'react';
import { connect } from 'react-redux';
import './HistoryList.scss';
import { withRouter } from 'react-router-dom';
import HistoryList from './HistoryList';

interface HistoryListContainerProps {
  searchHistory: string[];
  match: any;
}

type ImageListType = {
  imageList: {
    searchHistory: string[];
  };
};

const HistoryListContainer: React.FC<HistoryListContainerProps> = ({
  searchHistory,
  match,
}) => {
  return <HistoryList searchHistory={searchHistory} match={match} />;
};

const mapStateToProps = ({ imageList: { searchHistory } }: ImageListType) => {
  return {
    searchHistory,
  };
};

export default withRouter(connect(mapStateToProps)(HistoryListContainer));
