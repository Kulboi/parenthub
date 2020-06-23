import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './stylesheets/App.scss';

// VIEWS
import HomeView from './views/Home.jsx';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomeView} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  );
}

export default App;
