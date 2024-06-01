import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import IITKanpur from './components/iitkanpur/iitKanpur';
import AWS3 from './components/iitkanpur/aws/aws3';
import Bithoor from './components/bithoor';
import About from './components/about';
import ShowSoilMoistureChart from './components/iitkanpur/soil-moisture/showSoilMoistureChart';
import ShowPlantHeightChart from './components/iitkanpur/plant-height/showPlantHeightChart';
import ShowLeafAreaIndexChart from './components/iitkanpur/leaf-area-index/showLeafAreaIndexChart';
import ShowRootDepthChart from './components/iitkanpur/root-depth/showRootDepthChart';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/iitkanpur" element={<IITKanpur />}/>
          <Route path="/iitkanpur/aws3" element={<AWS3 />}/>
          <Route path="/iitkanpur/soil-moisture/:year/showchart/:id" element={<ShowSoilMoistureChart/>}/>
          <Route path="/iitkanpur/plant-height/:year/showchart/:id" element={<ShowPlantHeightChart />}/>
          <Route path="/iitkanpur/leaf-area-index/:year/showchart/:id" element={<ShowLeafAreaIndexChart />}/>
          <Route path="/iitkanpur/root-depth/:year/showchart/:id" element={<ShowRootDepthChart />}/>
          <Route path="/bithoor" element={<Bithoor />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
