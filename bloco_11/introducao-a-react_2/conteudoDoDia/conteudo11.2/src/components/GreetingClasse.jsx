// Componentes React
// 2. Via Classe:

import React from 'react';

class GreetingClasse extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

export default GreetingClasse;
