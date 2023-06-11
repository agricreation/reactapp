import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './comp/footer';
import Nav from './comp/nav.jsx';
import Body from './comp/body';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';

function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route exact path="/" element={<Body />} />
      <Route exact path="aboutus" element={<AboutUs />} />
      <Route exact path="contactus" element={<ContactUs />} />
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
