import React from 'react';
import './UserInfo.scss';

export interface ImageUserType {
  user: {
    profile_image: {
      small: string;
    };
    name: string;
    instagram_username: string;
    username: string;
  };
}

export interface UserInfoProps {
  image: ImageUserType;
}

const UserInfo: React.FC<UserInfoProps> = ({ image }) => {
  return (
    <div className="user-info">
      <img src={image.user.profile_image.small} alt="user-pic" />
      <div className="user-info__text">
        <span className="user-name">{image.user.name}</span>
        <span className="user-instagram">
          @
          {image.user.instagram_username
            ? image.user.instagram_username
            : image.user.username}
        </span>
      </div>
    </div>
  );
};

export default UserInfo;
