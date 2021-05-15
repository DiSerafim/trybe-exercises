// Adicionar comentários em JSX
import React from 'react';

const JSX = (
  <div>
    <p>'// Adicionar comentários em JSX'</p>
    <h1>This is a block of JSX</h1>
    <p>subtitle</p>
    {/*comment*/}
    <hr />
  </div>
);

class Terceiro extends React.Component {
  render() {
    return JSX;
  }
}

export default Terceiro;
