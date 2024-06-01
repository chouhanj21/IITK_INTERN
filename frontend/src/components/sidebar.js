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
            {/* <li className="nav-item">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  IIT Kanpur
                </button>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/iitkanpur/aws3">AWS3</Link></li>
                  <li><Link className="dropdown-item" to="/iitkanpur/soil-moisture">Soil Moisture</Link></li>
                </ul>
              </div>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/iitkanpur">IIT-Kanpur</Link>
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

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown } from 'react-bootstrap';

// function Sidebar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-sm bg-primary text-white">
//         <div className="container-fluid">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Dropdown>
//                 <Dropdown.Toggle variant="none" id="dropdown-basic">
//                   IIT Kanpur
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item href="/iitkanpur/aws3">AWS3</Dropdown.Item>
//                   <Dropdown.Item href="/iitkanpur/soil-moisture">Soil Moisture</Dropdown.Item>
//                   <Dropdown>
//                     <Dropdown.Toggle variant="none" id="dropdown-basic">
//                       Year Data
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       <Dropdown.Item href="/">2023</Dropdown.Item>
//                       <Dropdown.Item href="/">2024</Dropdown.Item>    
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/bithoor">Bithoor</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to="/about">About</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Sidebar;
