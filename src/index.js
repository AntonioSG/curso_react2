import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './router';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById("app")
);
