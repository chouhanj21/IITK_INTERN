import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SoilMoistureChart from './soilMoistureChart';
import 'react-toastify/dist/ReactToastify.css';

function SoilMoisture() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [Id, setId] = useState(1); // Default active ID is 1
    const [passId,setPassId]=useState(null);
    console.log(Id)
    const [Data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!startDate || !endDate) {
            toast.error("Please select both start date and end date.");
            return;
        }
        if (new Date(startDate) > new Date(endDate)) {
            toast.error("End date should be greater than or equal to start date.");
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/data-collection/soil-moisture",
                {
                    start_date: startDate,
                    end_date: endDate,
                    id: Id,
                }
            );
            setPassId(Id);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <>
            <ToastContainer />
            <div className="text-center my-2">
                <button className={`${Id === 1 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-1" onClick={() => setId(1)}>Plot-1</button>
                <button className={`${Id === 2 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-2" onClick={() => setId(2)}>Plot-2</button>
                <button className={`${Id === 3 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-3" onClick={() => setId(3)}>Plot-3</button>
                <button className={`${Id === 4 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-4" onClick={() => setId(4)}>Plot-4</button>
            </div>
            <div className="text-center my-2">
                <button className={`${Id === 5 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-5" onClick={() => setId(5)}>Plot-5</button>
                <button className={`${Id === 6 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-6" onClick={() => setId(6)}>Plot-6</button>
                <button className={`${Id === 7 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-7" onClick={() => setId(7)}>Plot-7</button>
                <button className={`${Id === 8 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-8" onClick={() => setId(8)}>Plot-8</button>
            </div>
            <div className="text-center my-2">
                <button className={`${Id === 9 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-9" onClick={() => setId(9)}>Plot-9</button>
                <button className={`${Id === 10 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-10" onClick={() => setId(10)}>Plot-10</button>
                <button className={`${Id === 11 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-11" onClick={() => setId(11)}>Plot-11</button>
                <button className={`${Id === 12 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-12" onClick={() => setId(12)}>Plot-12</button>
            </div>
            <div className="text-center my-2">
                <button className={`${Id === 13 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-13" onClick={() => setId(13)}>Plot-13</button>
                <button className={`${Id === 14 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-14" onClick={() => setId(14)}>Plot-14</button>
                <button className={`${Id === 15 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-15" onClick={() => setId(15)}>Plot-15</button>
                <button className={`${Id === 16 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-16" onClick={() => setId(16)}>Plot-16</button>
            </div>
            <div className="text-center my-2">
                <button className={`${Id === 17 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-17" onClick={() => setId(17)}>Plot-17</button>
                <button className={`${Id === 18 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-18" onClick={() => setId(18)}>Plot-18</button>
                <button className={`${Id === 19 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-19" onClick={() => setId(19)}>Plot-19</button>
                <button className={`${Id === 20 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-20" onClick={() => setId(20)}>Plot-20</button>
            </div>
            <div className="text-center my-2">
                <button className={`${Id === 21 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-21" onClick={() => setId(21)}>Plot-21</button>
                <button className={`${Id === 22 ? 'act-btn' : 'org-button'} mx-2`} id="spectrum-22" onClick={() => setId(22)}>Plot-22</button>
            </div>
            <div className="text-center my-2">
                <button className={`${Id === 23 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-23" onClick={() => setId(23)}>Plot-23</button>
                <button className={`${Id === 24 ? 'act-btn' : 'my-button'} mx-2`} id="spectrum-24" onClick={() => setId(24)}>Plot-24</button>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                <label style={{ margin: '8px' }}>
                    Start Date: &nbsp; &nbsp;
                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                </label>
                <label style={{ margin: "8px" }}>
                    End Date:&nbsp; &nbsp;
                    <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </label>
                <button type="submit" className='my-btn' disabled={isLoading}>Fetch Data</button>
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
            <SoilMoistureChart data={Data} id={passId} />
        </>
    );
}

export default SoilMoisture;

