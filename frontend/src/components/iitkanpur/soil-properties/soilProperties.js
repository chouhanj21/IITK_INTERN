import React from 'react';

function SoilProperties() {
    return (
        <>
        <h2 className='mx-2' style={{fontFamily:'Helvetica Neue'}}>Soil Type: Silty Loam</h2>
        <div className='center mx-2' >
            <table className='table'>
                <thead className='table-primary'>
                    <tr>
                        <th>Depth (cm)</th>
                        <th>Ksat (cm/day) @ 10°C</th>
                        <th>Organic content (%)</th>
                        <th>Dry density (g/cm³)</th>
                        <th>Specific gravity</th>
                        <th>Porosity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-info'>
                        <td>0-15</td>
                        <td>7.4±2.94</td>
                        <td>2.60</td>
                        <td>1.59</td>
                        <td>2.55</td>
                        <td>0.47</td>
                    </tr>
                    <tr className='table-info'>
                        <td>15-45</td>
                        <td>8.93±2.85</td>
                        <td>1.53</td>
                        <td>1.61</td>
                        <td>2.56</td>
                        <td>0.44</td>
                    </tr>
                    <tr className='table-info'>
                        <td>45-90</td>
                        <td>7.82±2.46</td>
                        <td>0.87</td>
                        <td>1.71</td>
                        <td>2.52</td>
                        <td>0.46</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='center mx-2' >
            <table className='table'>
                <thead className='table-primary'>
                    <tr>
                        <th>Depth (cm)</th>
                        <th>Sand (%)</th>
                        <th>Silt (%)</th>
                        <th>Clay (%)</th>
                        <th>D50 (mm)</th>
                        <th>Cu</th>
                        <th>Cc</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-info'>
                        <td>0-10</td>
                        <td>14.54</td>
                        <td>78.49</td>
                        <td>6.97</td>
                        <td>0.022</td>
                        <td>11.08</td>
                        <td>1.02</td>
                    </tr>
                    <tr className='table-info'>
                        <td>10-20</td>
                        <td>13.87</td>
                        <td>78.74</td>
                        <td>7.39</td>
                        <td>0.020</td>
                        <td>10.71</td>
                        <td>1.00</td>
                    </tr>
                    <tr className='table-info'>
                        <td>20-30</td>
                        <td>12.18</td>
                        <td>81.11</td>
                        <td>6.71</td>
                        <td>0.024</td>
                        <td>10.84</td>
                        <td>1.13</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='text-center my-2'>
            <img src="media/kanpur.jpg" width='80%' height='50%' alt="ET" srcSet="" />
        </div>
    </>
    );
}

export default SoilProperties;

