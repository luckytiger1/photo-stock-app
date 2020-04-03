import React, { useRef } from 'react';
import _ from 'lodash';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { RouteComponentProps } from 'react-router-dom';
// import Spinner from '../Spinner/Spinner';
import GalleryItem from './GalleryItem';
import noResultsImg from './assets/no-results.png';
import useInfiniteScroll from './customHooks';
import Spinner from '../Spinner/Spinner';

interface MatchParams {
  name: string;
}

export interface GalleryProps {
  advancePage?: () => void;
  results?: object[];
  loading: boolean;
  updateFavorites?: (image: object) => void;
  match?: RouteComponentProps<MatchParams>;
}

const Gallery = ({
  advancePage,
  results,
  loading,
  updateFavorites,
  match,
}: any) => {
  console.log(match);

  const bottomBoundaryRef = useRef(null);
  useInfiniteScroll(bottomBoundaryRef, advancePage);

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
      {match.path === '/:photoId' && (
        <div className="related-title">Related photos</div>
      )}
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
      {loading && <Spinner />}
      {!loading && (
        <p style={{ textAlign: 'center', marginTop: '30px' }}>
          <b>Yay! You have seen it all!</b>
        </p>
      )}
      <div
        id="page-bottom-boundary"
        style={{ border: '1px solid white' }}
        ref={bottomBoundaryRef}
      />
    </div>
  );
};

export default Gallery;
