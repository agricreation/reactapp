import './App.css';
import VisitPost from './blog';
// import Body from './comp/body';
import Footer from './comp/footer';
import Nav from './comp/nav.jsx';
// import Test from './comp/test';
// import Trending from './comp/trendig';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Trending /> */}
      {/* <Body /> */}
      <VisitPost />
      <Footer />
    </div>
  );
}

export default App;
