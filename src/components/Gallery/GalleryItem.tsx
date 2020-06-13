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
  return (
    <div className="photo-item" key={image.id}>
      <img
        src={image.urls.small}
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
