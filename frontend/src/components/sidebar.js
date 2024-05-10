import React from 'react';
function Sidebar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-primary text-white">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">Home</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="/iitkanpur">IIT Kanpur</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/bithoor">Bithoor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Sidebar;
