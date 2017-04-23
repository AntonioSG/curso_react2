import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseAction';

class CoursesPage extends React.Component{
    constructor(props, context){
      super(props, context);
    }

    courseRow(course, index){
      return <div key={index}>{course.title}</div>;
    }

    render(){
      return (
        <div>
          <h1>Cursos</h1>
          {this.props.courses.map(this.courseRow)}
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
