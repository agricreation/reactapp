import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './comp/footer';
import Nav from './comp/nav.jsx';
import Body from './comp/body';
import AboutUs from './pages/aboutus';
import ContactUs from './pages/contactus';
import VisitPost from './blog';
import BestAppsInTamil from './blog/posts/bestappsintamil';
import HkrAgriTechs from './blog/posts/hkragritechs';

function App() {
  return (
    <div className="App">
      <Nav />
    <Routes>
      <Route exact path="/" element={<Body />} />
      <Route exact path="aboutus" element={<AboutUs />} />
      <Route exact path="contactus" element={<ContactUs />} />
      <Route exact path="agricreations" element={<VisitPost />} />
      <Route exact path="hkragritechs" element={<HkrAgriTechs />} />
      <Route exact path="bestappsintamil" element={<BestAppsInTamil />} />
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
