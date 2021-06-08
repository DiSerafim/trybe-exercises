import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login as loginAction } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { login } = this.props;

    return (
      <div className="Login">
        <section className="login-inputs">
          <input
            type="text"
            onChange={ (e) => this.setState({ email: e.target.value }) }
            placeholder="email"
            data-testid="input-email"
          />
          <input
            type="password"
            onChange={ (e) => this.setState({ password: e.target.value }) }
            placeholder="senha"
            data-testid="input-password"
          />
        </section>
        <div className="link">
          <Link
            to="/clients"
            onClick={ () => login({ email, password }) }
            data-testid="btn-login"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch(loginAction(e)),
});

export default connect(null, mapDispatchToProps)(Login);
