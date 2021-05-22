import React, { Component } from 'react';
import '../App.css'
import ValidEmail from './ValidEmail';

class Conteudo extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail} = this.state;
    return (
      <div className="App">
        <hr />
        <p>Conteudo 15.1 (Testes Reeact) </p>
        <label htmlFor="id-email">
        Email:
          <input
            type="email"
            id="id-email"
            value={ email }
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>

        <input
          type="button"
          id="btn-enviar"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input type="button" id="btn-id" value="Voltar" />
        {/* <h2 data-testid="id-email-user">{`Resultado: ${saveEmail}`}</h2> */}
        <ValidEmail email={saveEmail} />
        <hr />
      </div>
    );
  };
}

export default Conteudo;
