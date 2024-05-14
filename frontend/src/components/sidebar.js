import React from 'react';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div>
    <nav className="navbar navbar-expand-sm bg-primary text-white">
      <div className="container-fluid">
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  IIT Kanpur
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/iitkanpur/aws3">AWS3</Link></li>
                  <li><Link className="dropdown-item" to="/iitkanpur/soil-moisture">Soil Moisture</Link></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/bithoor">Bithoor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Sidebar;
