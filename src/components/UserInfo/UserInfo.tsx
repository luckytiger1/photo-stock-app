import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ image }: any) => {
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
