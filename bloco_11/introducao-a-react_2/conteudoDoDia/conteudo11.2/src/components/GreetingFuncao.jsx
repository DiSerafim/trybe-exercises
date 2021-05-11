// Componentes React
// 1. Via função JavaScript:

function GreetingFuncao(props) {
  return (<h1>Hello, {props.name}</h1>);
}

function GreetingFuncaoProps(name) {
  return `Hello, ${name}`;
}
console.log(GreetingFuncaoProps('Diego'));

function greeting(name, lastName){
  return `Hello, ${name} ${lastName}`;
}
console.log(greeting('Diego', 'Serafim'));

export default (
  <GreetingFuncaoProps />,
  <GreetingFuncao />,
);
