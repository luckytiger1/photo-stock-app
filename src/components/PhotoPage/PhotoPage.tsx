import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import likeBtn from './assets/favorites.svg';
import downloadBtn from './assets/download-btn.svg';
import DownloadBtn from '../DownloadBtn/DownloadBtn';
import LikeBtn from '../LikeBtn/LikeBtn';
import GalleryContainer from '../Gallery/GalleryContainer';

const PhotoPage = ({ image, updateFavorites, toTitleCase, tags }: any) => {
  console.log(image);

  return (
    <div className="image-page__container">
      <div
        className="image-page__header"
        style={{
          backgroundImage: `url(${image.urls.full}) `,
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

            <DownloadBtn
              itemClass="download-btn"
              link={image.links.download}
              icon={downloadBtn}
            />
          </div>
        </div>
        <div className="image-page__photo">
          <div className="image-page__photo-main">
            <img src={image.urls.full} alt="main" />
          </div>
        </div>
        <div className="image-page__tags text-center">
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
