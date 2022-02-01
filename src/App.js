import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/BenjaminGagnolo/reactappgagnolo.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/BenjaminGagnolo/reactappgagnolo.git
        </a>
      </header>
    </div>
  );
}


export default App;
