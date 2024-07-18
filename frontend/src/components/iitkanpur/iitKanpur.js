import React, { useState } from 'react';
import Sidebar from '../sidebar';
import './iitkanpur.css';
import AWS3 from './aws/aws3';
import SoilMoisture from './soil-moisture/soilMoisture';
import WheatCrop from './wheat/wheatCrop';
import RiceCrop from './rice/riceCrop';
import ShowWindRose from './wind-rose/showWindRose';

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
            <div><button className={activeButton === 'Soil Moisture' ? 'active action' : 'action'} onClick={() => handleButtonClick('Soil Moisture')}>Soil Moisture</button></div>
            <div><button className={activeButton === 'Wheat Crop' ? 'active action' : 'action'} onClick={() => handleButtonClick('Wheat Crop')}>Crop Data (Wheat)</button></div>
            <div><button className={activeButton === 'Rice Crop' ? 'active action' : 'action'} onClick={() => handleButtonClick('Rice Crop')}>Crop Data (Rice)</button></div>
            <div><button className={activeButton === 'Wind Speed (Wind Rose)' ? 'active action' : 'action'} onClick={() => handleButtonClick('Wind Speed (Wind Rose)')}>Wind Speed (Wind Rose)</button></div>
          </div>
          <div className="col-9" style={{ margin: '0' }}>
            {(activeButton==='AWS3') && (<AWS3/>)}
            {(activeButton==='Soil Moisture') && (<SoilMoisture/>)}
            {(activeButton==='Wheat Crop') && (<WheatCrop/>)}
            {(activeButton==='Rice Crop') && (<RiceCrop/>)}
            {(activeButton==='Wind Speed (Wind Rose)') && (<ShowWindRose/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IITKanpur;
