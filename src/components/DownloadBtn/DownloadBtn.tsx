import React from 'react';

type DownLoadBtnProps = {
  itemClass: string;
  link: string;
  icon: string;
};

const DownloadBtn: React.FC<DownLoadBtnProps> = ({ itemClass, link, icon }) => {
  return (
    <button className={itemClass} type="button">
      <a
        href={link}
        download={link}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="download_link"
      >
        <img src={icon} alt="download" />
      </a>
    </button>
  );
};

export default DownloadBtn;
