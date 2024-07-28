import React, { useState } from 'react';
import Sidebar from '../sidebar';
import './bithoor.css';
import AWS4 from './aws4/aws4';
import WheatCrop from './wheat/wheatCrop';
import SoilProperties from './soil-properties/soilProperties';
import ShowWindRose from './wind-rose/showWindRose';
// import SoilMoisture from './soil-moisture/soilMoisture';
// import RiceCrop from './rice/riceCrop';

function Bithoor() {
  const [activeButton, setActiveButton] = useState('AWS4');
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <Sidebar />
      <div>
        <div className="row">
          <div className="col-3" style={{ background: 'blue', padding: '0',minHeight:'calc(100vh - 80px)'}}>
            <div><button className={activeButton === 'AWS4' ? 'active action' : 'action'} onClick={() => handleButtonClick('AWS4')}>Weather Data</button></div>
            <div><button className={activeButton === 'Soil Properties' ? 'active action' : 'action'} onClick={() => handleButtonClick('Soil Properties')}>Soil Properties</button></div>
            <div><button className={activeButton === 'Soil Moisture' ? 'active action' : 'action'} onClick={() => handleButtonClick('Soil Moisture')}>Soil Moisture</button></div>
            <div><button className={activeButton === 'Wheat Crop' ? 'active action' : 'action'} onClick={() => handleButtonClick('Wheat Crop')}>Crop Data (Wheat)</button></div>
            <div><button className={activeButton === 'Rice Crop' ? 'active action' : 'action'} onClick={() => handleButtonClick('Rice Crop')}>Crop Data (Rice)</button></div>
            <div><button className={activeButton === 'Wind Speed (Wind Rose)' ? 'active action' : 'action'} onClick={() => handleButtonClick('Wind Speed (Wind Rose)')}>Wind Speed (Wind Rose)</button></div>
          </div>
          <div className="col-9" style={{ margin: '0' }}>
            {(activeButton==='AWS4') && (<AWS4/>)}
            {(activeButton==='Soil Properties') && (<SoilProperties/>)}
            {/* {(activeButton==='Soil Moisture') && (<SoilMoisture/>)} */}
            {(activeButton==='Wheat Crop') && (<WheatCrop/>)}
            {/* {(activeButton==='Rice Crop') && (<RiceCrop/>)} */}
            {(activeButton==='Wind Speed (Wind Rose)') && (<ShowWindRose/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bithoor;
