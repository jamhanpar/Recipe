import './App.css';

import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App text-gray-500 grid md:grid-cols-6">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
