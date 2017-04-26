import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/coursesPage';
import ManageCoursePage from './components/course/ManagerCoursePage';

export default (
  <Route path="/" components={App}>
    <IndexRoute components={HomePage}/>
    <Route path="about" components={AboutPage}/>
    <Route path="courses" components={CoursesPage}/>
    <Route path="course" components={ManageCoursePage}/>
    <Route path="course/:id" components={ManageCoursePage}/>
  </Route>
);
