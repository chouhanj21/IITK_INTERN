import React,{useEffect, useState} from 'react';
import Sidebar from '../../sidebar';
import axios from 'axios';
import "./rootDepth.css";
import { useParams } from 'react-router-dom'; 
import RootDepthChart from './rootDepthChart';

function ShowRootDepthChart() {    
    const { year, id } = useParams();
    const [Data,setData] = useState(null);
    const fetchData = async (id,year)=>{
        try{
            const response = await axios.get(`http://localhost:5000/data-collection/root-depth-${year}/spectrum/${id}`);
            setData(response.data);
            console.log(response.data);
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
            <RootDepthChart data={Data} id={id}/>            
    </>
  );
}

export default ShowRootDepthChart;
