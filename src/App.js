import './App.css';

import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
