import React, {PropTypes} from 'react';

class CoursesPage extends React.Component{
    constructor(props, context){
      super(props, context);
      this.state = {
        course: { title: null }
      };
    }

    onTitleChange(event){
      let course = this.state.course;
      course.title = event.target.value;
      setState({course: course});
    }

    render(){
      return (
        <div>
          <h1>Cursos</h1>
          <h2>Crear curso</h2>
          <input type="text"
              onChange={this.onTitleChange}
              value={this.state.course.title}/>
          <br/>
          <input type="submit"
              onClick={this.titleSave}
              value="Guardar"/>
        </div>
      );
    }
}

export default CoursesPage;
