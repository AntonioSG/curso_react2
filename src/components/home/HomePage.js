import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render() {
    return (
      <div className="jumbotron">
        <h1>PluralSight</h1>
        <p>Curso de React & Redux impartido por Cory House en PluralSight</p>
        <Link to="about" className="btn btn-primary">Saber mas</Link>
      </div>
    );
  }
}

export default HomePage;
