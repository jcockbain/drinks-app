import React from 'react';

import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Events from './Events';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events/:eventId">
          <Events />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
