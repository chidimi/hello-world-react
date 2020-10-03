import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greets from './components/Greets';

function App() {
  return (
    <div className="App">
      <Greets name="patty" times={4}>
        <span role="img" aria-label="rabbit">🐰</span>
      </Greets>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Hello, World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export const example = () => {
const name = 'patty';
const greet = (name: string) => <p>Hello, {name || 'guest'}!</p>;
return <div>{greet(name)}</div>;
}

export default App;
