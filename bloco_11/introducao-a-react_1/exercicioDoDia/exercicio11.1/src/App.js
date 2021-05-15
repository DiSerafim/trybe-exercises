import React from 'react';
import './App.css';
import Primeiro from './components/Primeiro';
import Segundo from './components/Segundo';
import Terceiro from './components/Terceiro';
import Quinto from './components/Quinto';
import Sexto from './components/Sexto';
import Setimo from './components/Setimo';
import Oitavo from './components/Oitavo';
import Nono from './components/Nono';
// lista de tarefas
const tarefas = ['Acordar', 'Tomar banho', 'Tomar café', 'Escovar os dentes', 'Ir trabablhar'];

const setTask = (task) => {
  return(
    <li key={task}>
      { task }
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        <p>Lista de tarefas</p>
        { tarefas.map((task) => setTask(task)) }
      <hr />
      </ul>
      <p>Exercicio 3.1</p>
      <Primeiro />
      <p>Exercicio 3.2</p>
      <Segundo />
      <p>Exercicio 3.3</p>
      <Terceiro />
      <p>Exercicio 3.4</p>
      <p>?.. Fazer Depois</p>
      <p>Exercicio 3.5</p>
      <Quinto />
      <p>Exercicio 3.6</p>
      <Sexto />
      <p>Exercicio 3.7</p>
      <Setimo />
      <p>Exercicio 3.8</p>
      <Oitavo />
      <p>Exercicio 3.9</p>
      <Nono />
      <p>Exercicio 4 Bonus</p>
      <p>?.. Fazer Depois</p>
      </header>
    </div>
  );
}

export default App;
