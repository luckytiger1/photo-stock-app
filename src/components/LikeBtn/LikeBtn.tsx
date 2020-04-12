import React from 'react';

interface LikeBtnProps {
  itemClass: string;
  addToFavorites: () => void;
  icon: string;
}

const LikeBtn: React.FC<LikeBtnProps> = ({
  itemClass,
  addToFavorites,
  icon,
}) => {
  return (
    <button className={itemClass} type="button" onClick={addToFavorites}>
      <img src={icon} alt="like" />
    </button>
  );
};

export default LikeBtn;
