import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './Gallery.scss';
import { fetchImages } from '../../redux/actions/fetchImages';
import addToFavorites from '../../redux/actions/favorites';
import { advancePage } from '../../redux/actions/advancePage';
import {
  imagesSelector,
  searchResultsSelector,
  termSelector,
  imageIsLoadingSelector,
  favoritesSelector,
} from '../../redux/selectors/images-selectors';
import pageSelector from '../../redux/selectors/pages-selectors';
import { searchImages } from '../../redux/actions/searchImages';
import Gallery, { GalleryProps } from './Gallery';
import relatedImagesSelector from '../../redux/selectors/relatedImages-selectors';
import { AppState } from '../../redux/reducers/types/types';

interface GalleryContainerProps extends GalleryProps {
  images: object[];
  page: number;
  term: string;
  updateImages: () => void;
  updatePage: () => void;
  searchResults: object[];
  updateSearchResults: () => void;
  favorites: () => object[];
}

export const GalleryContainer = ({
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
  relatedImages,
}: any) => {
  useEffect(() => {
    if (term.length > 0) {
      updateSearchResults();
    } else {
      updateImages();
    }
  }, [page, updateImages, updateSearchResults, term, match.path]);

  let results;
  if (match.path === '/favorites') {
    results = favorites;
  } else if (match.path === '/:photoId') {
    results = relatedImages;
  } else {
    results = term ? searchResults : images;
  }

  return (
    <Gallery
      advancePage={updatePage}
      results={results}
      loading={loading}
      updateFavorites={updateFavorites}
      match={match}
      page={page}
    />
  );
};

const mapStateToProps = createStructuredSelector<AppState, any>({
  images: imagesSelector,
  page: pageSelector,
  searchResults: searchResultsSelector,
  term: termSelector,
  loading: imageIsLoadingSelector,
  favorites: favoritesSelector,
  relatedImages: relatedImagesSelector,
});

const mapDispatchToProps = {
  updatePage: advancePage,
  updateImages: fetchImages,
  updateSearchResults: searchImages,
  updateFavorites: addToFavorites,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GalleryContainer),
);
