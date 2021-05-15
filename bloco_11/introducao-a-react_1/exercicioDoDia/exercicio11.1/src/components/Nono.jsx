// Crie um componente com composição
import React from 'react';

const ChildComponent = () => {
  return (
    <div>
      <p>'// Crie um componente com composição'</p>
      <p>I am the child</p>
      <hr />
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
        { /* Change code below this line */ }


        { /* Change code above this line */ }
      </div>
    );
  }
};

export default ParentComponent;
