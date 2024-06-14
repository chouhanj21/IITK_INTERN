import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import PlantHeightChart from './plantHeightChart';
function PlantHeight2022() {
  const [Id,setId] = useState(null)
  const [Data,setData] = useState(null);
  const fetchData = async (id,year)=>{
      try{
          const response = await axios.get(`http://localhost:5000/data-collection/plant-height-${year}/spectrum/${id}`);
          setData(response.data);
          setId(id);
          // console.log(response.data);
      } 
      catch(error){
          console.log(error);
      }
  }
  return (
    <>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-1">Block-1</button>
              <button className='my-button mx-2' id="spectrum-2" onClick={()=>fetchData(2,2022)}>Block-2</button>
              <button className='my-button mx-2 disable-link' id="spectrum-3">Block-3</button>
              <button className='my-button mx-2 disable-link' id="spectrum-4">Block-4</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-5" onClick={()=>fetchData(5,2022)}>Block-5</button>
              <button className='org-button mx-2' id="spectrum-6" onClick={()=>fetchData(6,2022)} >Block-6</button>
              <button className='org-button mx-2' id="spectrum-7" onClick={()=>fetchData(7,2022)}>Block-7</button>
              <button className='my-button mx-2 disable-link' id="spectrum-8">Block-8</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-9">Block-9</button>
              <button className='org-button mx-2' id="spectrum-10" onClick={()=>fetchData(10,2022)}>Block-10</button>
              <button className='org-button mx-2' id="spectrum-11" onClick={()=>fetchData(11,2022)}>Block-11</button>
              <button className='my-button mx-2' id="spectrum-12" onClick={()=>fetchData(12,2022)}>Block-12</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-13">Block-13</button>
              <button className='org-button mx-2' id="spectrum-14" onClick={()=>fetchData(14,2022)}>Block-14</button>
              <button className='org-button mx-2' id="spectrum-15" onClick={()=>fetchData(15,2022)}>Block-15</button>
              <button className='my-button mx-2 disable-link' id="spectrum-16">Block-16</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-17">Block-17</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-18">Block-18</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-19">Block-19</button>
              <button className='my-button mx-2' id="spectrum-20" onClick={()=>fetchData(20,2022)}>Block-20</button>
            </div>
            <div className="text-center my-2">
              <button className='org-button mx-2 org-disable-link' id="spectrum-21">Block-21</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-22">Block-22</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-23">Block-23</button>
              <button className='my-button mx-2 disable-link' id="spectrum-24">Block-24</button>
            </div>
            <PlantHeightChart data={Data} id={Id}/>      
    </>
  );
}

export default PlantHeight2022;
