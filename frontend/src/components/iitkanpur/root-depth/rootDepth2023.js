import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import RootDepthChart from './rootDepthChart';
function RootDepth2023() {
  const [Id,setId] = useState(null)
  const [Data,setData] = useState(null);
  const fetchData = async (id,year)=>{
      try{
          const response = await axios.get(`http://localhost:5000/data-collection/root-depth-${year}/spectrum/${id}`);
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
              <button className='my-button mx-2 disable-link' id="spectrum-1" >Block-1</button>
              <button className='my-button mx-2 disable-link' id="spectrum-2" >Block-2</button>
              <button className='my-button mx-2 disable-link' id="spectrum-3" >Block-3</button>
              <button className='my-button mx-2 disable-link' id="spectrum-4" >Block-4</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-5" >Block-5</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-6" >Block-6</button>
              <button className='org-button mx-2' id="spectrum-7" onClick={()=>fetchData(7,2023)}>Block-7</button>
              <button className='my-button mx-2 disable-link' id="spectrum-8">Block-8</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-9">Block-9</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-10">Block-10</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-11">Block-11</button>
              <button className='my-button mx-2' id="spectrum-12" onClick={()=>fetchData(12,2023)}>Block-12</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-13">Block-13</button>
              <button className='org-button mx-2' id="spectrum-14" onClick={()=>fetchData(14,2023)}>Block-14</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-15">Block-15</button>
              <button className='my-button mx-2 disable-link' id="spectrum-16">Block-16</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-17" onClick={()=>fetchData(17,2023)}>Block-17</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-18">Block-18</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-19">Block-19</button>
              <button className='my-button mx-2 disable-link' id="spectrum-20">Block-20</button>
            </div>
            <div className="text-center my-2">
              <button className='org-button mx-2' id="spectrum-21" onClick={()=>fetchData(21,2023)}>Block-21</button>
              <button className='org-button mx-2 org-disable-link' id="spectrum-22">Block-22</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-23" onClick={()=>fetchData(23,2023)}>Block-23</button>
              <button className='my-button mx-2 disable-link' id="spectrum-24">Block-24</button>
            </div>
            <RootDepthChart data={Data} id={Id}/>      
    </>
  );
}

export default RootDepth2023;
