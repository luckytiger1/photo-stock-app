import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

const MainPage = lazy(() => import('./components/MainPage/MainPage'));
const Favorites = lazy(() => import('./components/Favorites/Favorites'));
const HistoryPage = lazy(() => import('./components/HistoryPage/HistoryPage'));
const PhotoPageContainer = lazy(() =>
  import('./components/PhotoPage/PhotoPageContainer'),
);

const App = () => {
  return (
    <div className="App ">
      <Suspense fallback={<Spinner />}>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/:photoId" component={PhotoPageContainer} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
