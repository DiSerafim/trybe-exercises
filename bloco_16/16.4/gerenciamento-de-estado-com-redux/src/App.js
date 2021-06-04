import React from 'react';
import ISSLocation from './components/ISSLocation';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <div style={{ width: 1000 }}>
              <h1>Space Station</h1>
          </div>
          <ISSLocation />
        </header>
      </div>
  );
}

export default App;
