import React, {PropTypes} from 'react';

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
      alert(`${this.state.course.title} guardado con exito.`);
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
              onClick={this.onClickSave}
              value="Guardar"/>
        </div>
      );
    }
}

export default CoursesPage;
