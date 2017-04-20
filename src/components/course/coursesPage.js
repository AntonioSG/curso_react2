import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseAction';

class CoursesPage extends React.Component{
    constructor(props, context){
      super(props, context);
      this.state = {
        course: { title: "" }
      };

      this.onTitleChange = this.onTitleChange.bind(this);
      this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
      let course = this.state.course;
      course.title = event.target.value;
      this.setState({course: course});
    }

    onClickSave(){
      this.props.dispatch(courseAction.createCourse(this.state.course));
    }

    courseRow(course, index){
      return <div key={index}>{course.title}</div>;
    }

    render(){
      return (
        <div>
          <h1>Cursos</h1>
          {this.props.courses.map(this.courseRow)}
          <h2>Crear curso</h2>
          <input type="text"
              onChange={this.onTitleChange}
              value={this.state.course.title}/>
          <br/>
          <input type="submit"
              onClick={this.onClickSave}
              value="Guardar"/>
        </div>
      );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
