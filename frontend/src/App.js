import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import IITKanpur from './components/iitkanpur';
import Bithoor from './components/bithoor';
import About from './components/about';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <div>
        <Sidebar/>
        <Routes>
          <Route path="/iitkanpur" element={<IITKanpur />} />
          <Route path="/bithoor" element={<Bithoor />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
