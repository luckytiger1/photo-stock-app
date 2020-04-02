import React from 'react';

export default function NavItem({ isMobile, icon, alt, label, clsName }: any) {
  return (
    <div className={`${clsName}`}>
      {isMobile ? (
        <img src={icon} alt={alt} />
      ) : (
        <>
          <img
            src={icon}
            alt={alt}
            className={clsName === 'logo' ? 'logo-icon' : undefined}
          />
          <span className={`${clsName}-text`}>{label}</span>
        </>
      )}
    </div>
  );
}
