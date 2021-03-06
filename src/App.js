import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Navigation, Career, Academics, Projects, Others } from './pages';
import BackgroundImage from './img/paper.png';

export default function App() {
  return (
    <div style={{
      background: `url(${BackgroundImage})`,
    }}>
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
          <Navigation>
            <Academics />
          </Navigation>
        </Route>
        <Route path='/projects'>
          <Navigation>
            <Projects />
          </Navigation>
        </Route>
        <Route path='/others'>
          <Navigation>
            <Others />
          </Navigation>
        </Route>
      </Switch>
    </div>
  );
}
