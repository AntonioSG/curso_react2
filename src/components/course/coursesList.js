import React, {PropTypes} from 'react';
import CourseListRow from './coursesListRow';

const CoursesList = ({courses}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Titulo</th>
          <th>Autor</th>
          <th>Categoria</th>
          <th>Tamaño</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course =>
          <CourseListRow key={course.id} course={course}/>
        )}
      </tbody>
    </table>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CoursesList;
