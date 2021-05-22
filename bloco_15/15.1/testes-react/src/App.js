import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { EditMovie, MovieList, NewMovie, MovieDetails, NotFound } from './aovivo/pages';
import './App.css';

import data from './aovivo/services/movieData';
import Conteudo from './conteudo/Conteudo';

function App() {
  localStorage.setItem('movies', JSON.stringify(data));

  return (
    <header>
      {/* Conteúdo do dia */}
      <div>
        <p>Conteudo do dia</p>
        <Conteudo />
      </div>
      {/* Aula ao vivo */}
      <Router>
        <hr />
        <p>Aula ao vivo</p>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:movieId/edit" component={EditMovie} />
          <Route path="/movies/:movieId" component={MovieDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </header>
  );
}

export default App;