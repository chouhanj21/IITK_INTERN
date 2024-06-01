import React,{useEffect, useState} from 'react';
import Sidebar from '../sidebar';
import SoilChart from './soilChart';
import axios from 'axios';
import "./soilMoisture.css";
import { useParams } from 'react-router-dom'; 

function ShowChart() {    
    const { year, id } = useParams();
    const [Data,setData] = useState(null);
    const fetchData = async (id,year)=>{
        try{
            const response = await axios.get(`http://localhost:5000/data-collection/soil-moisture-${year}/spectrum/${id}`);
            setData(response.data);
        } 
        catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData(id,year);
    },[id,year])

  return (
    <>
            <Sidebar/>
            {/* <pre>{JSON.stringify(Data, null, 2)}</pre> */}
            <SoilChart data={Data}/>            
    </>
  );
}

export default ShowChart;
