import React from 'react';

import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';

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
