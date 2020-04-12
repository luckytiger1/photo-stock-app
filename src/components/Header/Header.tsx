import React from 'react';
import './Header.scss';
import { useMediaQuery } from 'react-responsive';
import { Link, withRouter } from 'react-router-dom';
import logo from './assets/unsplash.svg';
import favoriteIcon from './assets/favorite.svg';
import historyIcon from './assets/history.svg';
import searchIcon from './assets/search-icon.svg';
import NavItem from '../NavItem/NavItem';

interface HeaderProps {
  match: any;
}

export const Header: React.FC<HeaderProps> = ({ match }) => {
  const isMobile = useMediaQuery({ maxWidth: 550 });

  return (
    <header className="App-header d-flex justify-content-between py-4">
      <NavItem
        isMobile={isMobile}
        clsName="logo"
        alt="logo"
        icon={logo}
        label="ImageStock"
      />

      <div className="menu-container d-flex">
        {!match.isExact && (
          <Link to="/">
            <NavItem
              isMobile={isMobile}
              clsName="search"
              alt="search-icon"
              icon={searchIcon}
              label="Search"
            />
          </Link>
        )}
        <Link to="/favorites">
          <NavItem
            isMobile={isMobile}
            clsName="favorite"
            alt="history-icon"
            icon={favoriteIcon}
            label="Favorites"
          />
        </Link>
        <Link to="/history">
          <NavItem
            isMobile={isMobile}
            clsName="search-history"
            alt="history-icon"
            icon={historyIcon}
            label="Search history"
          />
        </Link>
      </div>
    </header>
  );
};

export default withRouter(Header);
