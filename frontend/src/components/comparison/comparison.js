import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../styles/button.css';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../sidebar';
import CompChart from './compChart';



function Comparison() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [Data,setData] = useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [variable,setVariable]=useState('Temp1');
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if both start date and end date are selected
        if (!startDate || !endDate) {
            toast.error("Please select both start date and end date.");
            return;
        }
        // Check if start date is less than or equal to end date
        if (new Date(startDate) > new Date(endDate)) {
            toast.error("End date should be greater than or equal to start date.");
            return;
        }
        setIsLoading(true);
        try{
            const response = await axios.post("http://localhost:5000/data-collection/weather/aws/comparison",
                    {
                        start_date:startDate,
                        end_date:endDate,
                        variable:variable
                    }
                );
            //console.log(response.data.length);
            // console.log(response.data)
            setData(response.data);
        } 
        catch(error){
            console.log(error);
        }
        setIsLoading(false);
      };
  return (
    <div>
        <Sidebar/>
        <ToastContainer />
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center',justifyContent: "center"}}>
            <label style={{ margin: '8px' }}>
                Start Date: &nbsp; &nbsp;
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label style={{ margin:"8px" }}>
                End Date:&nbsp; &nbsp;
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>
            <label style={{ margin: '8px' }}>
                Variable: &nbsp; &nbsp;
                <select value={variable} onChange={(e) => setVariable(e.target.value)}>
                    <option value="Temp1">Temp1</option>
                    <option value="Temp2">Temp2</option>
                    <option value="SHF1">SHF1</option>
                    <option value="SHF2">SHF2</option>
                    <option value="W_Speed">Wind Speed</option>
                    <option value="Max_W_Speed">Max Wind Speed</option>
                    <option value="W_Dir">Wind Direction</option>
                    <option value="SolarRadiation">Solar Radation</option>
                    <option value="Rainfall">Rainfall</option>
                </select>
            </label>
            <button type="submit" className='my-btn' disabled={isLoading} >Fetch Data</button>
        </form>   
        {isLoading
            ?  
            <div style={{textAlign:"center"}}>
                <img src="../media/loading.gif" width={100} alt="loading..." srcSet="" />
                <p style={{color:"blue"}}> <i>Loading...</i></p>
            </div> 
            :
            null 
        }
        <CompChart data={Data} variable={variable}/>
    </div>
  );
}

export default Comparison;
