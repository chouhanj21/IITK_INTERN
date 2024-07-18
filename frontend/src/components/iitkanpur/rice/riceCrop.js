import React, { useState } from 'react';
import axios from 'axios';
import PlantHeightChart from './plant_height_chart'
import LeafAreaIndexChart from './leaf_area_index_chart';
import RootDepthChart from './root_depth_chart';
function RiceCrop() {
    const [Id, setId] = useState(1); // Default active ID is 1
    const [year,setYear]=useState(2022); // Default year 2022
    const [passId,setPassId]=useState(null);
    const [passYear,setPassYear]=useState(null);
    const [plantHeightData, setPlantHeightData] = useState(null);
    const [leafAreaIndexData, setLeafAreaIndexData] = useState(null);
    const [rootDepthData, setRootDepthData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/data-collection/rice-crop/iitk",
                {
                    id: Id,
                    year:year
                }
            );
            setPassId(Id);
            setPassYear(year);
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
            {/* <PlantHeightChart data={plantHeightData} id={passId} year={passYear}/>
            <LeafAreaIndexChart data={leafAreaIndexData} id={passId} year={passYear}/>
            <RootDepthChart data={rootDepthData} id={passId} year={passYear}/> */}
            {plantHeightData && plantHeightData.length > 1 && <PlantHeightChart data={plantHeightData} id={passId} year={passYear}/>}
            {leafAreaIndexData && leafAreaIndexData.length > 1 && <LeafAreaIndexChart data={leafAreaIndexData} id={passId} year={passYear}/>}
            {rootDepthData && rootDepthData.length > 1 && <RootDepthChart data={rootDepthData} id={passId} year={passYear}/>}
        </>
    );
}

export default RiceCrop;

