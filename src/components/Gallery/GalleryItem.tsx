import React from 'react';
import { withRouter } from 'react-router-dom';
import downloadIcon from './assets/download.svg';
import heartIconPressed from './assets/heart.svg';
import heartIconUnPressed from './assets/likebtn_withborder.svg';
import resizeIcon from './assets/resize.svg';
import UserInfo from '../UserInfo/UserInfo';
import DownloadBtn from '../DownloadBtn/DownloadBtn';
import LikeBtn from '../LikeBtn/LikeBtn';

export const GalleryItem = ({
  image,
  updateFavorites,
  history,
  match,
  favorites,
}: any) => {
  const createSrcSet = (url: string) => {
    const widths = [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000,
      1100,
      1200,
      1296,
      1400,
      1600,
      1800,
      2000,
      2200,
      2400,
      2592,
    ];
    const srcSetData = widths.reduce(
      (acc: string, width: number) =>
        `${acc} ${url}&auto=format&fit=crop&w=${width}&q=60 ${width}w,`,
      '',
    );
    return srcSetData.slice(0, srcSetData.length - 1);
  };

  return (
    <div className="photo-item" key={image.id}>
      <img
        sizes="(min-width: 1335px) 416px, (min-width: 992px) calc(calc(100vw - 72px) / 3), (min-width: 768px) calc(calc(100vw - 48px) / 2), 100vw"
        srcSet={createSrcSet(image.urls.raw)}
        src={`${image.urls.raw}&w=1000&q=80`}
        alt={image.alt_description && 'stock-img'}
        className="photo-item__img"
      />
      {match.path === '/:photoId' ? null : (
        <>
          <UserInfo image={image} />
          <div className="photo-item__info">
            <LikeBtn
              itemClass="info__btn"
              icon={
                favorites.find((el: any) => el === image)
                  ? heartIconPressed
                  : heartIconUnPressed
              }
              addToFavorites={() => updateFavorites(image)}
            />

            <button
              className="info__btn"
              type="button"
              onClick={() => history.push(image.id)}
            >
              <img src={resizeIcon} alt="resize" />
            </button>
            <DownloadBtn
              itemClass="info__btn"
              link={image.links.download}
              icon={downloadIcon}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(GalleryItem);
