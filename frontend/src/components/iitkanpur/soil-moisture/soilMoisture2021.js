// import React from 'react';
// import { Link } from 'react-router-dom';

// function  SoilMoisture2021() {     
//   return (
//     <>
//             <div className="text-center my-2">
//               <Link className='my-button mx-2 disable-link' id="spectrum-1" to="/iitkanpur/soil-moisture/2021/showchart/1">Spectrum <br /> 1</Link>
//               <Link className='my-button mx-2' id="spectrum-2" to="/iitkanpur/soil-moisture/2021/showchart/2">Spectrum <br /> 2</Link>
//               <Link className='my-button mx-2' id="spectrum-3" to="/iitkanpur/soil-moisture/2021/showchart/3">Spectrum <br /> 3</Link>
//               <Link className='my-button mx-2 disable-link' id="spectrum-4" to="/iitkanpur/soil-moisture/2021/showchart/4">Spectrum <br /> 4</Link>
//             </div>
//             <div className="text-center my-2">
//               <Link className='my-button mx-2' id="spectrum-5" to="/iitkanpur/soil-moisture/2021/showchart/5">Spectrum <br /> 5</Link>
//               <Link className='my-button mx-2' id="spectrum-6" to="/iitkanpur/soil-moisture/2021/showchart/6">Spectrum <br /> 6</Link>
//               <Link className='my-button mx-2' id="spectrum-7" to="/iitkanpur/soil-moisture/2021/showchart/7">Spectrum <br /> 7</Link>
//               <Link className='my-button mx-2' id="spectrum-8" to="/iitkanpur/soil-moisture/2021/showchart/8">Spectrum <br /> 8</Link>
//             </div>
//             <div className="text-center my-2">
//               <Link className='my-button mx-2' id="spectrum-9" to="/iitkanpur/soil-moisture/2021/showchart/9">Spectrum <br /> 9</Link>
//               <Link className='my-button mx-2' id="spectrum-10" to="/iitkanpur/soil-moisture/2021/showchart/10">Spectrum <br /> 10</Link>
//               <Link className='my-button mx-2' id="spectrum-11" to="/iitkanpur/soil-moisture/2021/showchart/11">Spectrum <br /> 11</Link>
//               <Link className='my-button mx-2' id="spectrum-12" to="/iitkanpur/soil-moisture/2021/showchart/12">Spectrum <br /> 12</Link>
//             </div>
//             <div className="text-center my-2">
//               <Link className='my-button mx-2' id="spectrum-13" to="/iitkanpur/soil-moisture/2021/showchart/13">Spectrum <br /> 13</Link>
//               <Link className='my-button mx-2' id="spectrum-14" to="/iitkanpur/soil-moisture/2021/showchart/14">Spectrum <br /> 14</Link>
//               <Link className='my-button mx-2' id="spectrum-15" to="/iitkanpur/soil-moisture/2021/showchart/15">Spectrum <br /> 15</Link>
//               <Link className='my-button mx-2 disable-link' id="spectrum-16" to="/iitkanpur/soil-moisture/2021/showchart/16">Spectrum <br /> 16</Link>
//             </div>
//             <div className="text-center my-2">
//               <Link className='my-button mx-2' id="spectrum-17" to="/iitkanpur/soil-moisture/2021/showchart/17">Spectrum <br /> 17</Link>
//               <Link className='my-button mx-2 disable-link' id="spectrum-18" to="/iitkanpur/soil-moisture/2021/showchart/18">Spectrum <br /> 18</Link>
//               <Link className='my-button mx-2' id="spectrum-19" to="/iitkanpur/soil-moisture/2021/showchart/19">Spectrum <br /> 19</Link>
//               <Link className='my-button mx-2' id="spectrum-20" to="/iitkanpur/soil-moisture/2021/showchart/20">Spectrum <br /> 20</Link>
//             </div>
//             <div className="text-center my-2">
//               <Link className='my-button mx-2 disable-link' id="spectrum-21" to="/iitkanpur/soil-moisture/2021/showchart/21">Spectrum <br /> 21</Link>
//               <Link className='my-button mx-2' id="spectrum-22" to="/iitkanpur/soil-moisture/2021/showchart/22">Spectrum <br /> 22</Link>
//             </div>
//             <div className="text-center my-2">
//               <Link className='my-button mx-2' id="spectrum-23" to="/iitkanpur/soil-moisture/2021/showchart/23">Spectrum <br /> 23</Link>
//               <Link className='my-button mx-2 disable-link' id="spectrum-24" to="/iitkanpur/soil-moisture/2021/showchart/24">Spectrum <br /> 24</Link>
//             </div>
//     </>
//   );
// }

// export default SoilMoisture2021;


import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import SoilMoistureChart from './soilMoistureChart';
function SoilMoisture2021() {
  const [Id,setId] = useState(null)
  const [Data,setData] = useState(null);
  const fetchData = async (id,year)=>{
      try{
          const response = await axios.get(`http://localhost:5000/data-collection/soil-moisture-${year}/spectrum/${id}`);
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
              <button className='my-button mx-2' id="spectrum-2" onClick={()=>fetchData(2,2021)}>Block-2</button>
              <button className='my-button mx-2' id="spectrum-3" onClick={()=>fetchData(3,2021)}>Block-3</button>
              <button className='my-button mx-2 disable-link' id="spectrum-4">Block-4</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-5" onClick={()=>fetchData(5,2021)}>Block-5</button>
              <button className='my-button mx-2' id="spectrum-6" onClick={()=>fetchData(6,2021)} >Block-6</button>
              <button className='my-button mx-2' id="spectrum-7" onClick={()=>fetchData(7,2021)}>Block-7</button>
              <button className='my-button mx-2' id="spectrum-8" onClick={()=>fetchData(8,2021)}>Block-8</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-9" onClick={()=>fetchData(9,2021)}>Block-9</button>
              <button className='my-button mx-2' id="spectrum-10" onClick={()=>fetchData(10,2021)}>Block-10</button>
              <button className='my-button mx-2' id="spectrum-11" onClick={()=>fetchData(11,2021)}>Block-11</button>
              <button className='my-button mx-2' id="spectrum-12" onClick={()=>fetchData(12,2021)}>Block-12</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-13" onClick={()=>fetchData(13,2021)}>Block-13</button>
              <button className='my-button mx-2' id="spectrum-14" onClick={()=>fetchData(14,2021)}>Block-14</button>
              <button className='my-button mx-2' id="spectrum-15" onClick={()=>fetchData(15,2021)}>Block-15</button>
              <button className='my-button mx-2 disable-link' id="spectrum-16">Block-16</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-17" onClick={()=>fetchData(17,2021)}>Block-17</button>
              <button className='my-button mx-2 disable-link' id="spectrum-18">Block-18</button>
              <button className='my-button mx-2' id="spectrum-19" onClick={()=>fetchData(19,2021)}>Block-19</button>
              <button className='my-button mx-2' id="spectrum-20" onClick={()=>fetchData(20,2021)}>Block-20</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2 disable-link' id="spectrum-21">Block-21</button>
              <button className='my-button mx-2' id="spectrum-22" onClick={()=>fetchData(22,2021)}>Block-22</button>
            </div>
            <div className="text-center my-2">
              <button className='my-button mx-2' id="spectrum-23" onClick={()=>fetchData(23,2021)}>Block-23</button>
              <button className='my-button mx-2 disable-link' id="spectrum-24">Block-24</button>
            </div>
            <SoilMoistureChart data={Data} id={Id}/>      
    </>
  );
}

export default SoilMoisture2021;

