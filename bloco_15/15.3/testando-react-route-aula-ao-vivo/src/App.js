import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Comments from './components/Comments';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Sobre mim</Link>
            </li>
            <li>
              <Link to="/projects">Projetos</Link>
            </li>
            <li>
              <Link to="/comments">Deixe um comentário</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path="/">
          <section>
            <h1>Página sobre mim</h1>
          </section>
        </Route>
        <Route path="/projects">
          <section>
            <h1>Página de projetos</h1>
          </section>
        </Route>
        <Route path="/comments" component={Comments} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;