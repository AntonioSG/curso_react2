import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseAction';
import CoursesList from './coursesList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
    constructor(props, context){
      super(props, context);

      this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }

    courseRow(course, index){
      return <div key={index}>{course.title}</div>;
    }

    redirectToAddCoursePage(){
      browserHistory.push('/course');
    }

    render(){
      const {courses} = this.props;
      return (
        <div>
          <h1>Cursos</h1>
          <input
            type="submit"
            value="Crear curso"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage}/>
          <CoursesList courses={courses}/>
        </div>
      );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(courseAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
