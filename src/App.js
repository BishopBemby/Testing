import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Async from './components/Async';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting/>
      </header>
      <body>
        <Async/>
      </body>
    </div>
  );
}

export default App;
