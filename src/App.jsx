import './App.css';
import Body from './comp/body';
import Footer from './comp/footer';
import Nav from './comp/nav.jsx';
// import Test from './comp/test';
import Trending from './comp/trendig';

function App() {
  return (
    <div className="App">
      <Nav />
      <Trending />
      {/* <Test /> */}

      <Body />
      <Footer />
    </div>
  );
}

export default App;
