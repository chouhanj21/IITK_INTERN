import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import IITKanpur from './components/iitkanpur/iitKanpur';
import AWS3 from './components/iitkanpur/aws3';
import Bithoor from './components/bithoor';
import About from './components/about';
import ShowChart from './components/iitkanpur/showChart';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/iitkanpur" element={<IITKanpur />}/>
          <Route path="/iitkanpur/aws3" element={<AWS3 />}/>
          <Route path="/iitkanpur/soil-moisture/:year/showchart/:id" element={<ShowChart />}/>
          <Route path="/bithoor" element={<Bithoor />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
