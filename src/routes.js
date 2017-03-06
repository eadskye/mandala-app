import React from 'react';
import { browserHistory, Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import Results from './components/results.js';
import About from './components/about.js';
import Drop from './components/drop.js'
import Landing from './components/landing.js'



export default (
  <Route history={browserHistory}>
    <Route path="/" component={App}/>
  <Route path="landing" component={Landing}/>
    <Route path="results" component={Results}/>
    <Route path="about" component={About}/>
  <Route path="drop" component={Drop}/>
  </Route>
);
