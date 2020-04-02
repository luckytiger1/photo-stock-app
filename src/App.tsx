import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import GalleryContainer from './components/Gallery/GalleryContainer';
import Favorites from './components/Favorites/Favorites';
import HistoryPage from './components/HistoryPage/HistoryPage';
import PhotoPageContainer from './components/PhotoPage/PhotoPageContainer';

const App = () => {
  return (
    <div className="App ">
      <Header />
      <Switch>
        {/* <Route component={Header}/> */}
        <Route
          exact
          path="/"
          component={() => (
            <>
              <SearchBox />
              <GalleryContainer />
            </>
          )}
        />
        <Route path="/favorites" component={Favorites} />
        <Route path="/history" component={HistoryPage} />
        <Route path="/:photoId" component={PhotoPageContainer} />
      </Switch>
    </div>
  );
};

export default hot(App);
