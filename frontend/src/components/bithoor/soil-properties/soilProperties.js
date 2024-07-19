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
                        <td>14.3±1.30</td>
                        <td>1.99</td>
                        <td>1.39</td>
                        <td>2.50</td>
                        <td>0.45</td>
                    </tr>
                    <tr className='table-info'>
                        <td>15-45</td>
                        <td>12±0.82</td>
                        <td>1.72</td>
                        <td>1.44</td>
                        <td>2.48</td>
                        <td>0.44</td>
                    </tr>
                    <tr className='table-info'>
                        <td>45-90</td>
                        <td>16±0.82</td>
                        <td>1.23</td>
                        <td>1.43</td>
                        <td>2.54</td>
                        <td>0.44</td>
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
                        <td>0-15</td>
                        <td>21.18</td>
                        <td>76.75</td>
                        <td>2.07</td>
                        <td>0.046</td>
                        <td>4.34</td>
                        <td>1.44</td>
                    </tr>
                    <tr className='table-info'>
                        <td>15-30</td>
                        <td>21.2</td>
                        <td>76.06</td>
                        <td>2.74</td>
                        <td>0.043</td>
                        <td>5.58</td>
                        <td>1.61</td>
                    </tr>
                    <tr className='table-info'>
                        <td>30-45</td>
                        <td>17.04</td>
                        <td>80.56</td>
                        <td>2.4</td>
                        <td>0.042</td>
                        <td>4.40</td>
                        <td>1.45</td>
                    </tr>
                    <tr className='table-info'>
                        <td>45-60</td>
                        <td>21.15</td>
                        <td>76.73</td>
                        <td>2.15</td>
                        <td>0.045</td>
                        <td>4.16</td>
                        <td>1.38</td>
                    </tr>
                    <tr className='table-info'>
                        <td>60-90</td>
                        <td>22.79</td>
                        <td>74.96</td>
                        <td>2.25</td>
                        <td>0.045</td>
                        <td>4.66</td>
                        <td>1.45</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='text-center my-2' >
            <img src="media/bithoor.jpg" width='80%' height='50%' alt="ET" srcSet="" />
        </div>
    </>
    );
}

export default SoilProperties;

