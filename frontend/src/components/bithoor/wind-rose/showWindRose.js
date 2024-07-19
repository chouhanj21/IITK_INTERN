import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../../../styles/button.css';
import 'react-toastify/dist/ReactToastify.css';
import WindSpeedWindRose from './windSpeedWindRose';



function ShowWindRose() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [WindSpeedData,setWindSpeedData] = useState(null);
    const [MaxWindSpeedData,setMaxWindSpeedData] = useState(null);
    const [MinWindSpeedData,setMinWindSpeedData] = useState(null);
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
            const response = await axios.post("http://localhost:5000/data-collection/weather/aws4/wind-rose",
                    {
                        start_date:startDate,
                        end_date:endDate
                    }
                );
            // const response = await axios.get("http://localhost:5000/data-collection/weather/aws3/wind-rose")
            // console.log(response.data.wind_speed_data);
            setWindSpeedData(response.data.wind_speed_data);
            setMaxWindSpeedData(response.data.max_wind_speed_data);
            setMinWindSpeedData(response.data.min_wind_speed_data);
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
        <WindSpeedWindRose Data={WindSpeedData} Title={'Wind Speed'}/>
        <WindSpeedWindRose Data={MaxWindSpeedData} Title={'Max Wind Speed'}/>
        <WindSpeedWindRose Data={MinWindSpeedData} Title={'Min Wind Speed'}/>
    </div>
  );
}

export default ShowWindRose;
