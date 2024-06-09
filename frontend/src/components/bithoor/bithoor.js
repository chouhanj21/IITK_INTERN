import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Chart from '../highchart';
import AirTempChart from '../graph-comparison/temp-graph/airTempChart';
import RH123Chart from '../graph-comparison/rh-graph/rh123Chart';
import WindSpeedChart from '../graph-comparison/w_speed-graph/windSpeedChart';
import SHFChart from '../graph-comparison/shf-graph/shfChart';
import { ToastContainer, toast } from 'react-toastify';
import '../../styles/button.css';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../sidebar';
function Bithoor() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [option,setOption]=useState('custom');
    const [Data,setData] = useState(null);
    const [isLoading,setIsLoading]=useState(false);
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
            const response = await axios.post("http://localhost:5000/data-collection/weather/aws4",
                {
                    start_date:startDate,
                    end_date:endDate,
                    type:option
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
            <label style={{ margin: '20px' }}>
                Start Date: &nbsp; &nbsp;
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label style={{ margin:"20px" }}>
                End Date:&nbsp; &nbsp;
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>
            <label style={{ margin: '8px' }}>
                Option: &nbsp; &nbsp;
                <select value={option} onChange={(e) => setOption(e.target.value)}>
                    <option value="custom">Custom</option>
                    <option value="daily">Daily Average</option>
                    <option value="weekly">Weekly Average</option>
                </select>
            </label>
            <button type="submit" className='my-btn' disabled={isLoading} >Fetch Data</button>
        </form>   
        {isLoading
            ?  
            <div style={{textAlign:"center"}}>
                <img src="media/loading.gif" width={100} alt="loading..." srcSet="" />
                <p style={{color:"blue"}}> <i>Loading...</i></p>
            </div> 
            :
            null
        }
        <AirTempChart data={Data}/>
        <RH123Chart data={Data}/>
        <WindSpeedChart data={Data}/>
        <Chart data={Data} column={"Wind_Direction"}/>
        <Chart data={Data} column={"Solar_Radiation"}/>
        <Chart data={Data} column={"Atm_Pressure"}/>
        <SHFChart data={Data}/>
        <Chart data={Data} column={"Rainfall"}/>
        {/* <Chart data={Data} column={"BatteryVoltage"}/> */}
    </div>
  );
}

export default Bithoor;
