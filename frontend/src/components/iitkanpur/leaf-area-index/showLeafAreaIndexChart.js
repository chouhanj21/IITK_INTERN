import React,{useEffect, useState} from 'react';
import Sidebar from '../../sidebar';
import axios from 'axios';
import "./leafAreaIndex.css";
import { useParams } from 'react-router-dom'; 
import LeafAreaIndexChart from './leafAreaIndexChart';

function ShowLeafAreaIndexChart() {    
    const { year, id } = useParams();
    const [Data,setData] = useState(null);
    const fetchData = async (id,year)=>{
        try{
            const response = await axios.get(`http://localhost:5000/data-collection/leaf-area-index-${year}/spectrum/${id}`);
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
            <LeafAreaIndexChart data={Data} id={id}/>      
               
    </>
  );
}

export default ShowLeafAreaIndexChart;
