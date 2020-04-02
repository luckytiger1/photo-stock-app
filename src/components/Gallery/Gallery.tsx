import React from 'react';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../Spinner/Spinner';
import GalleryItem from './GalleryItem';
import noResultsImg from './assets/no-results.png';

const Gallery = ({
  advancePage,
  results,
  loading,
  updateFavorites,
  match,
}: any) => {
  if (!loading && _.isEmpty(results) && match.path === '/favorites') {
    return <div className="no-liked-photos ">No liked photos :(</div>;
  }

  if (!loading && _.isEmpty(results)) {
    return (
      <div className="no-results">
        <img src={noResultsImg} alt="no-results" className="no-results-img" />
      </div>
    );
  }
  return (
    <div className="container-sm">
      <InfiniteScroll
        dataLength={results.length}
        next={advancePage}
        hasMore
        loader={loading ? <Spinner /> : null}
      >
        <div className="gallery-container columns">
          {results.map((image: any) => {
            return (
              <GalleryItem
                image={image}
                updateFavorites={updateFavorites}
                key={image.id}
              />
            );
          })}
        </div>
      </InfiniteScroll>
      {!loading && (
        <p style={{ textAlign: 'center', marginTop: '30px' }}>
          <b>Yay! You have seen it all!</b>
        </p>
      )}
    </div>
  );
};

export default Gallery;
