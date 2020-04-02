import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './Gallery.scss';
import {
  fetchImages,
  addToFavorites,
  mainPageUnloaded,
} from '../../redux/actions/fetchImages';
import advancePage from '../../redux/actions/advancePage';
import {
  imagesSelector,
  searchResultsSelector,
  termSelector,
  imageIsLoadingSelector,
  favoritesSelector,
} from '../../selectors/images-selectors';
import pageSelector from '../../selectors/pages-selectors';
import { searchImages } from '../../redux/actions/searchImages';
import Gallery from './Gallery';

const GalleryContainer = ({
  images,
  page,
  term,
  updateImages,
  updatePage,
  searchResults,
  updateSearchResults,
  loading,
  updateFavorites,
  favorites,
  match,
}: any) => {
  useEffect(() => {
    if (term) {
      updateSearchResults();
    } else {
      updateImages();
    }
  }, [page, updateImages, updateSearchResults, term]);
  let results;
  if (match.path === '/favorites') {
    results = favorites;
  } else {
    results = term ? searchResults : images;
  }

  return (
    <Gallery
      advancePage={updatePage}
      results={results}
      term={term}
      loading={loading}
      updateFavorites={updateFavorites}
      match={match}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  images: imagesSelector,
  page: pageSelector,
  searchResults: searchResultsSelector,
  term: termSelector,
  loading: imageIsLoadingSelector,
  favorites: favoritesSelector,
});

const mapDispatchToProps = {
  updatePage: advancePage,
  updateImages: fetchImages,
  updateSearchResults: searchImages,
  updateFavorites: addToFavorites,
  unloadPage: mainPageUnloaded,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GalleryContainer),
);