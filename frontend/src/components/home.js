import React from 'react';
import Sidebar from './sidebar';
function Home() {
  return (
    <>
    <Sidebar/>
      <div style={{marginLeft:'10px',marginRight:'10px',fontFamily:'Helvetica Neue' }}>
            <h2>ET Partitioning Using stable isotopes of oxygen and hydrogen</h2>
            <h3>Project Introduction</h3>
            <p style={{textAlign:'justify', fontFamily:'serif',fontSize:'18px'}}>
              The irrigation water demand in the Ganga basin is among the highest in the world (>90% of the total freshwater used in the basin). 
              A major portion of the applied irrigation water eventually evapotranspires. 
              The transpiration (T) component of the evapotranspiration (ET) is associated with crop productivity,
              while the undesirable soil evaporation (E) component represents losses. 
              The knowledge of the relative magnitude of E and T fluxes in ET is therefore essential to design efficient irrigation techniques. 
              The knowledge of ET partitioning is also crucial to understand the mechanism of energy and 
              moisture transfer in the soil-plant-atmosphere continuum. In spite of its importance, few, if any, 
              studies have investigated ET partitioning over the Ganga basin. In this project, 
              we propose to estimate E and T fractions of ET by conducting field experiments at a site in the Upper Ganga Plains.
              A method based on stable isotopes of oxygen and hydrogen will be used. 
              The main outcome of the project will be an understanding of the diurnal, 
              inter- and intra- cropping seasonal variations in ET partitioning over rice-wheat system at the study site.  
            </p>
            <div className='container'>
              <div className='row'>
                <div className='col-6'>
                  <img src="media/sites.jpg" width='100%' height='70%' alt="ET" srcSet="" />
                </div>
                <div className='col-6'>
                  <img src="media/ET.png" width='100%' height='72%' alt="ET" srcSet="" />
                </div>

              </div>

            </div>
      </div>
    </>
  );
}

export default Home;
