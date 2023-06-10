import './App.css';
// import VisitPost from './blog';
// import Body from './comp/body';
import Footer from './comp/footer';
import Nav from './comp/nav.jsx';
import AboutUs from './pages/aboutus';
// import Test from './comp/test';
// import Trending from './comp/trendig';

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      {/* <Trending /> */}
      {/* <Body /> */}
      {/* <VisitPost /> */}
      <Footer />
    </div>
  );
}

export default App;
