import React from 'react';
import Sidebar from './sidebar';

function About() {
  return (
   <>
   <Sidebar/>
    <h2 style={{textAlign: "center"}}><span style={{borderBottom: "2pt solid blue"}} class="px-4">About</span></h2>
    <div class="container px-5">
        <p style={{textAlign: "center",fontSize: "18px"}} className="px-5">
            The irrigation water demand in the Ganga basin is among the highest in the world (90% of the total freshwater used in the basin). 
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
    <h2 style={{textAlign: "center"}}><span style={{borderBottom: "2pt solid blue"}} className="px-4">Our Team</span></h2>
    {/* {% for team in context %} */}
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <h3 className="text-center mt-2"><span style={{borderBottom: "2pt solid blue"}} className="px-4">team_title</span></h3>
                </div>
            </div>
            <div className="row" style={{margin: "auto"}}>
                {/* {% for member in team.members %} */}
                <div className="col-md-3" style={{margin: "auto"}}>
                    <div className="card-box text-center">
                        <div className="user-pic">
                        <img src="{{url_for('static', filename='team/' + member.image)}}" className="img-fluid" alt="User Pic" draggable="false"/>
                        </div>
                        <h4>name &nbsp;</h4>
                        <h6>designation&nbsp;</h6>
                        <a href="mailto:{{member.email}}"><i>email&nbsp;</i></a>
                    </div>
                </div>
                {/* {% endfor %} */}
            </div>
        </div>
        {/* {% endfor %} */}
   </>
  );
}

export default About;
