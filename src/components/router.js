import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'App';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage}/>
    <Route path="about" components={AboutPage}/>
  </Route>
);
