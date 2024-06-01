import React,{useEffect, useState} from 'react';
import Sidebar from '../../sidebar';
import PlantHeightChart from './plantHeightChart';
import axios from 'axios';
import "./plantHeight.css";
import { useParams } from 'react-router-dom'; 

function ShowPlantHeightChart() {    
    const { year, id } = useParams();
    const [Data,setData] = useState(null);
    const fetchData = async (id,year)=>{
        try{
            const response = await axios.get(`http://localhost:5000/data-collection/plant-height-${year}/spectrum/${id}`);
            setData(response.data);
            console.log(response.data)
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
            <PlantHeightChart data={Data} id={id}/>      
               
    </>
  );
}

export default ShowPlantHeightChart;
