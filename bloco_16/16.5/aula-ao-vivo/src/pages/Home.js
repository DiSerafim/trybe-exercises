import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <main className="Home">
        <h3>Cadastro de Clientes</h3>
        <div className="link">
          <Link to="/Login">Faça seu Login</Link>
        </div>
      </main>
    );
  }
}

export default Home;
