import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import Chart from '../../highchart';
import TempChart from '../../graph-comparison/temp-graph/tempChart';
import RHChart from '../../graph-comparison/rh-graph/rhChart';
import WSpeedChart from '../../graph-comparison/w_speed-graph/wspeedChart';
import SHFChart from '../../graph-comparison/shf-graph/shfChart';
import { ToastContainer, toast } from 'react-toastify';
import '../../../styles/button.css';
import 'react-toastify/dist/ReactToastify.css';



function AWS3() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [Data,setData] = useState(null);
    const [isLoading,setIsLoading]=useState(false);
    const [option,setOption]=useState('custom');
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
            const response = await axios.post("http://localhost:5000/data-collection/weather/aws3",
                    {
                        start_date:startDate,
                        end_date:endDate,
                        type:option
                    }
                );
            //console.log(response.data.length);
            // console.log(option);
            console.log(response.data)
            setData(response.data);
        } 
        catch(error){
            console.log(error);
        }
        setIsLoading(false);
      };
  return (
    <div>
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
                <img src="../media/loading.gif" width={100} alt="loading..." srcSet="" />
                <p style={{color:"blue"}}> <i>Loading...</i></p>
            </div> 
            :
            null 
        }
        {/* <pre>{JSON.stringify(Data, null, 2)}</pre> */}
        <TempChart data={Data}/>
        {/* <Chart data={Data} column={"Temp1"}/> */}
        {/* <Chart data={Data} column={"Temp2"}/> */}
        <RHChart data={Data}/>
        {/* <Chart data={Data} column={"RH1"}/>
        <Chart data={Data} column={"RH2"}/> */}
        <WSpeedChart data={Data}/>
        {/* <Chart data={Data} column={"W_Speed"}/>
        <Chart data={Data} column={"A_W_Speed"}/>
        <Chart data={Data} column={"Max_W_Speed"}/> */}
        <Chart data={Data} column={"W_Dir"}/>
        <Chart data={Data} column={"SolarRadiation"}/>
        <Chart data={Data} column={"Baro_Press"}/>
        <SHFChart data={Data}/>
        {/* <Chart data={Data} column={"SHF1"}/>
        <Chart data={Data} column={"SHF2"}/> */}
        <Chart data={Data} column={"LavelInPan"}/>
        <Chart data={Data} column={"Rain"}/>
        {/* <Chart data={Data} column={"BatteryVoltage"}/> */}
    </div>
  );
}

export default AWS3;
