import logo from './logo.svg';
import './App.css';
import HelloMyFriends from './components/HelloMyFriends';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloMyFriends />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentação do React
        </a>
      </header>
    </div>
  );
}

export default App;
