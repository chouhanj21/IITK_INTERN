import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import IITKanpur from './components/iitkanpur/iitKanpur';
import Bithoor from './components/bithoor/bithoor';
import About from './components/about';
import Comparison from './components/comparison/comparison';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/iitkanpur" element={<IITKanpur />}/>
          <Route path="/bithoor" element={<Bithoor />} />
          <Route path="/comparison" element={<Comparison />}/>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
