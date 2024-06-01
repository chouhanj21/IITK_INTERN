import React, { useState } from 'react';
import Sidebar from '../sidebar';
import './iitkanpur.css';
import SoilMoisture2021 from './soilMoisture2021';
import AWS3 from './aws3';
import SoilMoisture2022 from './soilMoisture2022';
import SoilMoisture2023 from './soilMoisture2023';
import SoilMoisture2024 from './soilMoisture2024';

function IITKanpur() {
  const [activeButton, setActiveButton] = useState('AWS3');
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <Sidebar />
      <div>
        <div className="row">
          <div className="col-3" style={{ background: 'blue', padding: '0',minHeight:'calc(100vh - 80px)'}}>
            <div><button className={activeButton === 'AWS3' ? 'active action' : 'action'} onClick={() => handleButtonClick('AWS3')}>AWS3</button></div>
            <div><button className={activeButton === 'Soil Moisture 2021' ? 'active action' : 'action'} onClick={() => handleButtonClick('Soil Moisture 2021')}>Soil Moisture 2021</button></div>
            <div><button className={activeButton === 'Soil Moisture 2022' ? 'active action' : 'action'} onClick={() => handleButtonClick('Soil Moisture 2022')}>Soil Moisture 2022</button></div>
            <div><button className={activeButton === 'Soil Moisture 2023' ? 'active action' : 'action'} onClick={() => handleButtonClick('Soil Moisture 2023')}>Soil Moisture 2023</button></div>
            <div><button className={activeButton === 'Soil Moisture 2024' ? 'active action' : 'action'} onClick={() => handleButtonClick('Soil Moisture 2024')}>Soil Moisture 2024</button></div>
          </div>
          <div className="col-9" style={{ margin: '0' }}>
            {(activeButton==='AWS3') && (<AWS3/>)}
            {(activeButton==='Soil Moisture 2021') && (<SoilMoisture2021/>)}
            {(activeButton==='Soil Moisture 2022') && (<SoilMoisture2022/>)}
            {(activeButton==='Soil Moisture 2023') && (<SoilMoisture2023/>)}
            {(activeButton==='Soil Moisture 2024') && (<SoilMoisture2024/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IITKanpur;
