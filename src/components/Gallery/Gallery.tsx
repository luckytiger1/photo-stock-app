import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import _ from 'lodash';
import GalleryItem from './GalleryItem';
import noResultsImg from './assets/no-results.png';
import useInfiniteScroll from './customHooks';
import Spinner from '../Spinner/Spinner';
import gridModeDark from './assets/grid-dark.svg';
import rowMode from './assets/row.svg';
import rowModeDark from './assets/row-dark.svg';
import gridMode from './assets/grid.svg';

export interface GalleryProps {
  advancePage?: () => void;
  results?: object[];
  loading: boolean;
  updateFavorites?: (image: object) => void;
  match?: any;
  page: number;
}

const Gallery = ({
  advancePage,
  results,
  loading,
  updateFavorites,
  match,
  page,
}: any) => {
  const bottomBoundaryRef = useRef(null);
  useInfiniteScroll(bottomBoundaryRef, advancePage);
  const isMobile = useMediaQuery({ maxWidth: 480 });

  if (!loading && _.isEmpty(results) && match.path === '/favorites') {
    return <div className="no-liked-photos ">No liked photos :(</div>;
  }
  return (
    <>
      <div className="gallery-mode text-center">
        {isMobile ? (
          <>
            <img src={rowModeDark} alt="row" className="px2" />
            <img src={gridMode} alt="grid" className="px-2" />
          </>
        ) : (
          <>
            <img src={rowMode} alt="row" className="px2" />
            <img src={gridModeDark} alt="grid" className="px-2" />
          </>
        )}
      </div>
      <div className="container-sm">
        {match.path === '/:photoId' && (
          <div className="related-title">Related photos</div>
        )}

        <div className="gallery-container columns">
          {!loading && _.isEmpty(results) && (
            <div className="no-results">
              <img
                src={noResultsImg}
                alt="no-results"
                className="no-results-img"
              />
            </div>
          )}
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
        {page !== 1 && (
          <button
            className="to-top-btn"
            onClick={() => window.scrollTo(0, 0)}
            type="button"
          >
            <img
              src="https://img.icons8.com/bubbles/50/000000/up.png"
              alt="to top arrow"
            />
          </button>
        )}

        {loading && !_.isEmpty(results) ? (
          <Spinner />
        ) : (
          <p style={{ textAlign: 'center', marginTop: '250px' }}>
            <b>Yay! You have seen it all!</b>
          </p>
        )}
        {match.path === '/favorites' || match.path === '/:photoId' ? null : (
          <div
            id="page-bottom-boundary"
            style={{ border: '1px solid white' }}
            ref={bottomBoundaryRef}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
