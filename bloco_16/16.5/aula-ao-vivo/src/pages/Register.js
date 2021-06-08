import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRegister as addRegisterAction } from '../actions';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };

    this.validateRegister = this.validateRegister.bind(this);
  }

  validateRegister() {
    const { name, age, email } = this.state;
    const { addRegister } = this.props;
    addRegister({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  }

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            data-testid="input-register-nome"
            value={ name }
            onChange={ (e) => this.setState({ name: e.target.value }) }
          />
          <input
            type="number"
            placeholder="Idade"
            data-testid="input-register-idade"
            value={ age }
            onChange={ (e) => this.setState({ age: e.target.value }) }
          />
          <input
            type="text"
            placeholder="Email"
            data-testid="input-register-email"
            value={ email }
            onChange={ (e) => this.setState({ email: e.target.value }) }
          />
        </div>
        <button type="button" onClick={ this.validateRegister }>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addRegister: (e) => dispatch(addRegisterAction(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
