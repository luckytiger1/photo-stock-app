import React from 'react';

interface NavItemProps {
  isMobile: boolean;
  icon: string;
  alt: string;
  label: string;
  clsName: string;
}

const NavItem: React.FC<NavItemProps> = ({
  isMobile,
  icon,
  alt,
  label,
  clsName,
}) => {
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
};

export default NavItem;
