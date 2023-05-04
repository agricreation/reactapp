import './App.css';
import Nav from './comp/nav.jsx';
import Postcard from './comp/postcards';
import Trending from './comp/trendig';
import {Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Trending />
      <Postcard />
      <Postcard />
    </div>
  );
}

export default App;
