import React from 'react';
import './App.css';
import JSX from './components/3.1';

// lista de tarefas
const tarefas = ['Acordar', 'Tomar banho', 'Tomar café', 'Escovar os dentes', 'Ir trabablhar'];
const App = () => ( <ul>{ tarefas.map(tarefa => <li>{ tarefa }</li>) }</ul> );

export default App;