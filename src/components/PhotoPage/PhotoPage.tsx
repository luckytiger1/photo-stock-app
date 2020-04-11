import React from 'react';
import { useMediaQuery } from 'react-responsive';
import UserInfo from '../UserInfo/UserInfo';
import likeBtn from './assets/favorites.svg';
import downloadBtnIcon from './assets/download-btn.svg';
import downloadBtnMobile from './assets/download-mobile.svg';
import DownloadBtn from '../DownloadBtn/DownloadBtn';
import LikeBtn from '../LikeBtn/LikeBtn';
import ConnectedGalleryContainer from '../Gallery/GalleryContainer';

interface ImageType {
  links: {
    download: string;
  };
  urls: {
    full: string;
  };
  user: any;
}

interface TagsType {
  title: string;
}

interface PhotoPageProps {
  image: ImageType;
  updateFavorites: (image: object) => void;
  toTitleCase: (str: string) => string;
  tags: TagsType[];
}

const PhotoPage: React.FC<PhotoPageProps> = ({
  image,
  updateFavorites,
  toTitleCase,
  tags,
}) => {
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
            {tags.map((tag: TagsType, index: number) => {
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
        <ConnectedGalleryContainer />
      </div>
    </div>
  );
};

export default PhotoPage;
