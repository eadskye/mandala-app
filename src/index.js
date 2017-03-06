import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <Router history={browserHistory} routes={routes} />
</MuiThemeProvider>, document.getElementById('container'));
