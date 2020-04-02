import React from 'react';

const LikeBtn = ({ itemClass, addToFavorites, icon }: any) => {
  return (
    <button className={itemClass} type="button" onClick={addToFavorites}>
      <img src={icon} alt="like" />
    </button>
  );
};

export default LikeBtn;
