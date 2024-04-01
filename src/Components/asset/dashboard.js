
import '../style/dashboard.css';
import logo from '../../image/pro-logo.jpeg';
import React, { useState } from 'react';



function Dashboard() {
        const [isOpen, setIsOpen] = useState(false);

        const openNav = () => {
          setIsOpen(true);
        };
      
        const closeNav = () => {
          setIsOpen(false);
        };
        

  return <>
         <div id="mySidenav" className={`sidenav ${isOpen ? 'open' : ''}`}>
        <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
        
        <div className="dashboard-child-div">
        <div className="dashboard-name">
               
                    <span>Dashboard</span>
                </div>
               
                <div className="dashboard-contents">
                <div className="content-inner">  <img width="20" height="20" src="https://img.icons8.com/fluency/48/laptop-metrics.png" alt="laptop-metrics"/>
                                Dashboard</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>
                         </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/color/48/product--v4.png" alt="product--v4"/>
                                Product
                                </div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>
                         </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/color/48/crowd.png" alt="crowd"/>
                                Customers</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>      
                        </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/color/48/request-money.png" alt="request-money"/>
                                Income</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>
                        </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/external-promote-appliance-electronic-vol3-microdots-premium-microdot-graphic.png" alt="external-promote-appliance-electronic-vol3-microdots-premium-microdot-graphic"/>
                                Promote</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>
                        </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/skeuomorphism/32/experimental-help-skeuomorphism.png" alt="experimental-help-skeuomorphism"/>
                                Help</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>      
                        </div>
        </div>
                
                        
                        <div className="profile-div">
                      
                      <img className='profile-logo' src={logo} alt="" />
                    
                      <div className='profile-info'>
                      <div>Evano</div>
                      <div style={{color:"#838E9C"}}>Project Manager</div>
                      </div>
                      <img width="10" height="10" src="https://img.icons8.com/metro/26/EBEBEB/sort-down.png" alt="sort-down"/>
              </div>
        {/* <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a> */}
      </div>
      <div id="main">
        <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
      </div>
      <style jsx>{`
        .sidenav {
          height: 100%;
          width: 0;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: #111;
          overflow-x: hidden;
          transition: 0.5s;
          padding-top: 60px;
        }

        .sidenav.open {
          width: 220px;
        }

        .sidenav a {
          padding: 8px 8px 8px 32px;
          text-decoration: none;
          font-size: 20px;
          color: #818181;
          display: block;
          transition: 0.3s;
        }

        .sidenav a:hover {
          color: #f1f1f1;
        }

        .sidenav .closebtn {
          position: absolute;
          top: 0;
          right: 25px;
          font-size: 30px;
          margin-left: 50px;
        }

        #main {
          transition: margin-left .5s;
          padding: 10px;
          color : #FFFF;
          background-color: #000000;
        }

        @media screen and (max-height: 450px) {
          .sidenav {padding-top: 15px;}
          .sidenav a {font-size: 18px;}
        }
      `}</style>


        {/* <div  className="dashboard-main-div">
                           
        <div className="dashboard-child-div">
        <div className="dashboard-name">
               
                    <span>Dashboard</span>
                </div>
               
                <div className="dashboard-contents">
                <div className="content-inner">  <img width="20" height="20" src="https://img.icons8.com/fluency/48/laptop-metrics.png" alt="laptop-metrics"/>
                                Dashboard</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>
                         </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/color/48/product--v4.png" alt="product--v4"/>
                                Product
                                </div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>
                         </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/color/48/crowd.png" alt="crowd"/>
                                Customers</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>      
                        </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/color/48/request-money.png" alt="request-money"/>
                                Income</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>
                        </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/external-promote-appliance-electronic-vol3-microdots-premium-microdot-graphic.png" alt="external-promote-appliance-electronic-vol3-microdots-premium-microdot-graphic"/>
                                Promote</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>
                        </div>
                <div className="dashboard-contents">
                <div className="content-inner"> 
                <img width="20" height="20" src="https://img.icons8.com/skeuomorphism/32/experimental-help-skeuomorphism.png" alt="experimental-help-skeuomorphism"/>
                                Help</div>
                                <img width="10" height="10" src="https://img.icons8.com/ios-filled/50/FFFFFF/forward--v1.png" alt="forward--v1"/>      
                        </div>
        </div>
                
                        
                        <div className="profile-div">
                      
                      <img className='profile-logo' src={logo} alt="" />
                    
                      <div className='profile-info'>
                      <div>Evano</div>
                      <div style={{color:"#838E9C"}}>Project Manager</div>
                      </div>
                      <img width="10" height="10" src="https://img.icons8.com/metro/26/EBEBEB/sort-down.png" alt="sort-down"/>
              </div>
                        
                
        </div> */}
  </>
    
  
}


export default Dashboard