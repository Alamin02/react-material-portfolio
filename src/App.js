import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Navigation, Career } from './pages';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/career'>
          <Navigation>
            <Career />
          </Navigation>
        </Route>
        <Route path='/academics'>
          <Navigation />
        </Route>
        <Route path='/projects'>
          <Navigation />
        </Route>
        <Route path='/others'>
          <Navigation />
        </Route>
      </Switch>
    </>
  );
}
