// JSX
import React from 'react';

class ReactClass extends React.Component {
  render() {
    const nome = 'Diego Serafim';
    const classe = 'App';
    const element = <h1 className={classe}>Hello, {nome}</h1>;
    return (
      element
    )
  }
}

export default ReactClass;
