// Defina uma classe HTML em JSX
import React from 'react';

const clas = (
  <div className="myDiv">
    <p>'// Defina uma classe HTML em JSX'</p>
    <h1>Add a class to this div</h1>
    <hr />
  </div>
);

class JSX extends React.Component {
  render() {
    return clas;
  }
}

export default JSX;