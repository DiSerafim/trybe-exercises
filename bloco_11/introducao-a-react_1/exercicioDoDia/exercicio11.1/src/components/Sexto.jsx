// Saiba mais sobre tags JSX de fechamento automático
import React from 'react';

const tagFechamento = (
  <div>
    <p>'// Saiba mais sobre tags JSX de fechamento automático'</p>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

class JSX extends React.Component {
  render() {
    return (tagFechamento);
  }
}

export default JSX;
