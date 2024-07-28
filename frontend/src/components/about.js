import React from 'react';
import Sidebar from './sidebar';
// import jayeshImage from 'media/team-members/jayesh.jpg'
function About() {
  return (
   <>
   <Sidebar/>
    <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <h3 className="text-center mt-2"><span style={{borderBottom: "2pt solid blue"}} className="px-4">Faculty Members</span></h3>
            </div>
        </div>
        <div className="row" style={{margin: "auto"}}>
            <div className="col-md-3" style={{margin: "auto"}}>
                <div className="card-box text-center">
                    <div className="user-pic">
                    <img src="media/team-members/shivam-tripathi.jpg" className="img-fluid" alt="User Pic" draggable="false"/>
                    </div>
                    <h4>Dr. Shivam Tripathi&nbsp;</h4>
                    <h6>Professor&nbsp;</h6>
                    <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                    <a href="mailto:{{shiva@iitk.ac.in}}">Email: <i>shiva@iitk.ac.in&nbsp;</i></a>
                </div>
            </div>
            <div className="col-md-3" style={{margin: "auto"}}>
                <div className="card-box text-center">
                    <div className="user-pic">
                    <img src="media/team-members/saumyen-guha.jpg" className="img-fluid" alt="User Pic" draggable="false"/>
                    </div>
                    <h4>Dr. Saumyen Guha&nbsp;</h4>
                    <h6>Professor&nbsp;</h6>
                    <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                    <a href="mailto:{{sguha@iitk.ac.in}}">Email: <i>sguha@iitk.ac.in&nbsp;</i></a>
                </div>
            </div>
            <div className="col-md-3" style={{margin: "auto"}}>
                <div className="card-box text-center">
                    <div className="user-pic">
                    <img src="media/team-members/rajesh-srivastava.jpg" className="img-fluid" alt="User Pic" draggable="false"/>
                    </div>
                    <h4>Dr. Rajesh Srivastava&nbsp;</h4>
                    <h6>Professor&nbsp;</h6>
                    <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                    <a href="mailto:{{rajeshs@iitk.ac.in}}">Email: <i>rajeshs@iitk.ac.in&nbsp;</i></a>
                </div>
            </div>
        </div>
        <div className="row" style={{margin: "auto"}}>
            <div className="col-md-1" style={{margin: "auto"}}></div>
            <div className="col-md-3" style={{margin: "auto"}}>
                <div className="card-box text-center">
                    <div className="user-pic">
                    <img src="media/team-members/richa-ojha.jpg" className="img-fluid" alt="User Pic" draggable="false"/>
                    </div>
                    <h4>Dr. Richa Ojha&nbsp;</h4>
                    <h6>Associate Professor&nbsp;</h6>
                    <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                    <a href="mailto:{{richao@iitk.ac.in}}">Email: <i>richao@iitk.ac.in&nbsp;</i></a>
                </div>
            </div>
            <div className="col-md-3" style={{margin: "auto"}}>
                <div className="card-box text-center">
                    <div className="user-pic">
                    <img src="media/team-members/gopal-krishan.jpeg" className="img-fluid" alt="User Pic" draggable="false" width='40%'/>
                    </div>
                    <h4>Dr. Gopal Krishan&nbsp;</h4>
                    <h6>Scientist 'E'&nbsp;</h6>
                    <h6>National Institute of Hydrology, Roorkee&nbsp;</h6>
                    <a href="mailto:{{drgopal.krishan@gmail.com}}">Email: <i>drgopal.krishan@gmail.com&nbsp;</i></a>
                </div>
            </div>
            <div className="col-md-1" style={{margin: "auto"}}></div>
        </div>
    </div>
    <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <h3 className="text-center mt-2"><span style={{borderBottom: "2pt solid blue"}} className="px-4">Research Team Members</span></h3>
                </div>
            </div>
            <div className="row" style={{margin: "auto"}}>
                <div className="col-md-3" style={{margin: "auto"}}>
                    <div className="card-box text-center">
                        <div className="user-pic">
                        <img src="media/team-members/pravesh.jpg" className="img-fluid" alt="User Pic" draggable="false" width='40%'/>
                        </div>
                        <h4>Mr. Pravesh Singh&nbsp;</h4>
                        <h6>PhD Scholar&nbsp;</h6>
                        <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                        <a href="mailto:{{praveshs21@iitk.ac.in}}">Email: <i>praveshs21@iitk.ac.in&nbsp;</i></a>
                    </div>
                </div>
                <div className="col-md-3" style={{margin: "auto"}}>
                    <div className="card-box text-center">
                        <div className="user-pic">
                        <img src="media/team-members/sahir-azim.jpg" className="img-fluid" alt="User Pic" draggable="false" width='40%' />
                        </div>
                        <h4>Mr. Sahir Azim&nbsp;</h4>
                        <h6>Project Engineer&nbsp;</h6>
                        <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                        <a href="mailto:{{sahir@iitk.ac.in}}">Email: <i>sahir@iitk.ac.in&nbsp;</i></a>
                    </div>
                </div>
                <div className="col-md-3" style={{margin: "auto"}}>
                    <div className="card-box text-center">
                        <div className="user-pic">
                        <img src="media/team-members/balan.jpg" className="img-fluid" alt="User Pic" draggable="false" width='40%'/>
                        </div>
                        <h4>Mr. Diravia Balan &nbsp;</h4>
                        <h6>Project Engineer&nbsp;</h6>
                        <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                        <a href="mailto:{{diraviabs@iitk.ac.in}}">Email: <i>diraviabs@iitk.ac.in&nbsp;</i></a>
                    </div>
                </div>
            </div>
            <div className="row" style={{margin: "auto"}}>
                <div className="col-md-1" style={{margin: "auto"}}></div>
                <div className="col-md-3" style={{margin: "auto"}}>
                    <div className="card-box text-center">
                        <div className="user-pic">
                        <img src="media/team-members/baljinder.jpg" className="img-fluid" alt="User Pic" draggable="false" width='40%'/>
                        </div>
                        <h4>Mr. Baljinder Singh&nbsp;</h4>
                        <h6>Project Associate-I&nbsp;</h6>
                        <h6>National Institute of Hydrology, Roorkee&nbsp;</h6>
                        <a href="mailto:{{baljinders714@gmail.com}}">Email: <i>baljinders714@gmail.com&nbsp;</i></a>
                    </div>
                </div>
                <div className="col-md-3" style={{margin: "auto"}}>
                    <div className="card-box text-center">
                        <div className="user-pic">
                        <img src="media/team-members/pankaj.jpg" className="img-fluid" alt="User Pic" draggable="false" width='40%'/>
                        </div>
                        <h4>Mr. Pankaj Thakur&nbsp;</h4>
                        <h6>Project Associate-I&nbsp;</h6>
                        <h6>National Institute of Hydrology, Roorkee&nbsp;</h6>
                        {/* <a href="mailto:{{}}">Email: <i>&nbsp;</i></a> */}
                    </div>
                </div>
                <div className="col-md-1" style={{margin: "auto"}}></div>
            </div>
        </div>
        <div className="container">
        <div className="row">
            <div className="col-sm-6 offset-sm-3">
                <h3 className="text-center mt-2"><span style={{borderBottom: "2pt solid blue"}} className="px-4">Intern Members</span></h3>
            </div>
        </div>
        <div className="row" style={{margin: "auto"}}>
            <div className="col-md-1" style={{margin: "auto"}}></div>
            <div className="col-md-3" style={{margin: "auto"}}>
                <div className="card-box text-center">
                    <div className="user-pic">
                        <div style={{marginLeft:'30px',width: '200px',height: '200px',borderRadius: '100%',flexShrink: 0, backgroundImage: `url(media/team-members/pinkesh.jpg)`, backgroundPosition: 'center top', backgroundSize: 'cover'}}>
                        </div>
                    </div>
                    <h4>Mr. Pinkesh Mahawar&nbsp;</h4>
                    <h6>Web Developer&nbsp;</h6>
                    <h6>Computer Science and Engineering</h6>
                    <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                    <a href="mailto:{{pinkeshm21@iitk.ac.in}}">Email: <i>pinkeshm21@iitk.ac.in&nbsp;</i></a>
                </div>
            </div>
            <div className="col-md-3" style={{margin: "auto"}}>
                <div className="card-box text-center">
                    <div className="user-pic">
                        <div style={{marginLeft:'30px',width: '200px',height: '200px',borderRadius: '100%',flexShrink: 0, backgroundImage: `url(media/team-members/jayesh.jpg)`, backgroundPosition: 'center top', backgroundSize: 'cover'}}>
                        </div>
                    </div>
                    <h4>Mr. Jayesh Chouhan&nbsp;</h4>
                    <h6>Web Developer</h6>
                    <h6>Computer Science and Engineering</h6>
                    <h6>Indian Institute of Technology, Kanpur&nbsp;</h6>
                    <a href="mailto:{{chouhanj21@iitk.ac.in}}">Email: <i>chouhanj21@iitk.ac.in&nbsp;</i></a>
                </div>
            </div>
            <div className="col-md-1" style={{margin: "auto"}}></div>
        </div>
    </div>
   </>
  );
}

export default About;
