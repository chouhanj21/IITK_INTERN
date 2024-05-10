import React from 'react';
import Footer from './footer';
function Home() {
  return (
    <>
      <h2 className="m-3 " style={{borderBottom: "3pt solid blue"}}>ET Partitioning Using stable isotopes of oxygen and hydrogen</h2>
      <div className="mx-4">
          <h3>Project Introduction</h3>
          <p style={{width: "70%",fontSize: "18px"}}>
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
      </div>
      <div className="mx-4" style={{textAlign: "right"}}>
          <h3>Data Categories</h3>
          <p>
              <ul style={{listStyleType: "none",fontSize: "18px"}}>
                  {/* {% for chart in context %}
                  <li>{{chart.title}} ( <a href="/iitkanpur#{{chart.id}}">IITK</a> | <a href="/bithoor#{{chart.id}}">Bithoor</a> )</li>
                  {% endfor %} */}
                  <li>Relative Humidity  ( <a href="/iitk">IITK</a> | <a href="/bithoor">Bithoor</a> )</li>
                  <li>Wind Speed and Direction ( <a href="/iitk">IITK</a> | <a href="/bithoor">Bithoor</a> )</li>
                  <li>Solar Radiation ( <a href="/iitk">IITK</a> | <a href="/bithoor">Bithoor</a> )</li>
                  <li>Atmospheric Pressure ( <a href="/iitk">IITK</a> | <a href="/bithoor">Bithoor</a> )</li>
                  <li>Soil Heat Flux ( <a href="/iitk">IITK</a> | <a href="/bithoor">Bithoor</a> )</li>
                  <li>Pan Evaporation ( <a href="/iitk">IITK</a> )</li>
                  <li>Rainfall ( <a href="/iitk">IITK</a> | <a href="/bithoor">Bithoor</a> )</li>
                  <li>Battery Voltage ( <a href="/iitk">IITK</a> | <a href="/bithoor">Bithoor</a> )</li>
              </ul>
          </p>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
