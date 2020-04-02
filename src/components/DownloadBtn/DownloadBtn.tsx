import React from 'react';

const DownloadBtn = ({ itemClass, link, icon }: any) => {
  return (
    <button className={itemClass} type="button">
      <a href={link} download={link} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="download" />
      </a>
    </button>
  );
};

export default DownloadBtn;
