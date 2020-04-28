import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/career'>
          Something else
        </Route>
      </Switch>
    </>
  );
}
