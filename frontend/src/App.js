import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import AWS3 from './components/iitkanpur/aws3';
import Bithoor from './components/bithoor';
import About from './components/about';
import SoilMoisture from './components/iitkanpur/soilMoisture';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/iitkanpur/aws3" element={<AWS3 />}/>
          <Route path="/iitkanpur/soil-moisture" element={<SoilMoisture />}/>
          <Route path="/bithoor" element={<Bithoor />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
