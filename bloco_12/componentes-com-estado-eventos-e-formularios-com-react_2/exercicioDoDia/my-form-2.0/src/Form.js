import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  render() {
    return (
      <div>
        <h1>Meu 1° Form em React</h1>
        <fieldset>
          <form className="form">
            <label>
              Nome:
              <input name="name" type="text"></input>
            </label>
            
            <label>
              Email:
              <input name="email" type="text"></input>
            </label>
            
            <label>
              Cpf:
              <input name="cpf" type="text"></input>
            </label>
            
            <label>
              Endereço:
              <input name="endereco" type="text"></input>
            </label>
            
            <label>
              Cidade:
              <input name="" type="text"></input>
            </label>
            
            <label>
              Estado
              <input name="" type="comboBox"></input>
            </label>
            
            <label>
              Tipo:
              <input name="" type="text"></input>
            </label>
          </form>
        </fieldset>
        <fieldset>
          <form>
            <label>
              <textarea></textarea>
            </label>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default Form;
