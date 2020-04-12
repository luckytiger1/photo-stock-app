import React from 'react';
import { connect } from 'react-redux';
import './HistoryList.scss';
import { withRouter } from 'react-router-dom';
import HistoryList from './HistoryList';

interface HistoryListContainerProps {
  searchHistory: string[];
  match: any;
}

const HistoryListContainer: React.FC<HistoryListContainerProps> = ({
  searchHistory,
  match,
}) => {
  return <HistoryList searchHistory={searchHistory} match={match} />;
};

const mapStateToProps = ({ imageList: { searchHistory } }: any) => {
  return {
    searchHistory,
  };
};

export default withRouter(connect(mapStateToProps)(HistoryListContainer));
