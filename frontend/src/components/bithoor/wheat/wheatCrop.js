import React, { useState } from 'react';
import axios from 'axios';
import PlantHeightChart from './plant_height_chart'
import LeafAreaIndexChart from './leaf_area_index_chart';
import RootDepthChart from './root_depth_chart';
function WheatCrop() {
    const [year,setYear]=useState(2022); // Default year 2022
    const [passYear,setPassYear]=useState(null);
    const [plantHeightData, setPlantHeightData] = useState(null);
    const [leafAreaIndexData, setLeafAreaIndexData] = useState(null);
    const [rootDepthData, setRootDepthData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/data-collection/wheat-crop/bithoor",
                {
                    year:year
                }
            );
            setPassYear(year);
            console.log(passYear);
            console.log(response.data);
            setPlantHeightData(response.data.plant_height);
            setLeafAreaIndexData(response.data.leaf_area_index);
            setRootDepthData(response.data.root_depth);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    return (
        <>
            <div className="text-center my-2">
                <button className={`${year === 2022 ? 'act-btn' : 'my-button'} mx-2`} onClick={() => setYear(2022)}>2022</button>
                <button className={`${year === 2023 ? 'act-btn' : 'my-button'} mx-2`} onClick={() => setYear(2023)}>2023</button>
                <button className={`${year === 2024 ? 'act-btn' : 'my-button'} mx-2`} onClick={() => setYear(2024)}>2024</button>
                <button type="submit" className='my-btn' disabled={isLoading} onClick={fetchData}> Fetch Data</button>
            </div>
            {isLoading
            ?  
            <div style={{textAlign:"center"}}>
                <img src="../media/loading.gif" width={100} alt="loading..." srcSet="" />
                <p style={{color:"blue"}}> <i>Loading...</i></p>
            </div> 
            :
            null 
            }
            {plantHeightData && plantHeightData.length > 1 && <PlantHeightChart data={plantHeightData} year={passYear}/>}
            {leafAreaIndexData && leafAreaIndexData.length > 1 && <LeafAreaIndexChart data={leafAreaIndexData} year={passYear}/>}
            {rootDepthData && rootDepthData.length > 1 && <RootDepthChart data={rootDepthData} year={passYear}/>}
        </>
    );
}

export default WheatCrop;

