import React from 'react'
import '../style/dashboard.css';
function Dashboard() {
  return <>
        <div className="dashboard-main-div">
                <div className="dashboard-name">
                {/* <img width="38" height="38" src="https://img.icons8.com/fluency/48/performance-macbook.png" alt="performance-macbook"/> */}
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
                        
                <div className="profile-div"></div>
        </div>
  </>
    
  
}

export default Dashboard