import React from 'react';
import { useMediaQuery } from 'react-responsive';
import UserInfo from '../UserInfo/UserInfo';
import likeBtn from './assets/favorites.svg';
import downloadBtnIcon from './assets/download-btn.svg';
import downloadBtnMobile from './assets/download-mobile.svg';
import DownloadBtn from '../DownloadBtn/DownloadBtn';
import LikeBtn from '../LikeBtn/LikeBtn';
import GalleryContainer from '../Gallery/GalleryContainer';

const PhotoPage = ({ image, updateFavorites, toTitleCase, tags }: any) => {
  const isMobile = useMediaQuery({ maxWidth: 550 });
  return (
    <div className="image-page__container">
      <div
        className="image-page__header"
        style={{
          backgroundImage: !isMobile ? `url(${image.urls.full})` : 'none',
        }}
      >
        <div className="image-page__actions">
          <UserInfo image={image} />
          <div className="btn-container">
            <LikeBtn
              itemClass="like-btn"
              addToFavorites={() => updateFavorites(image)}
              icon={likeBtn}
            />
            {isMobile ? (
              <DownloadBtn
                itemClass="download-btn"
                link={image.links.download}
                icon={downloadBtnMobile}
              />
            ) : (
              <DownloadBtn
                itemClass="download-btn"
                link={image.links.download}
                icon={downloadBtnIcon}
              />
            )}
          </div>
        </div>
        <div className="image-page__photo">
          <div className="image-page__photo-main">
            <img src={image.urls.full} alt="main" />
          </div>
        </div>
        <div className="image-page__tags">
          <span className="title">Related tags</span>
          <div className="tags-container">
            {tags.map((tag: any, index: any) => {
              return (
                <div className="tag-box" key={index.toString()}>
                  <span>{toTitleCase(tag.title)}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="image-page__body">
        <GalleryContainer />
      </div>
    </div>
  );
};

export default PhotoPage;
