import React from 'react'
import '../style/bar2.css';



function Bar2() {
  return <>
         <div className="bar-2">
            <div className="bar-2-contents">
              <div className="bar-content-image">
                <img width="80" height="80" src="https://img.icons8.com/color/96/us-dollar-circled--v1.png" alt="us-dollar-circled--v1"/>
              </div>
                 <div className="bar-content-description">
                  <div className='des-title'>Earning</div>
                    <div className='dollar'><span style={{color:'Green'}}>$</span> 198k</div>
                  <div className='des-ack'><span className='percentage'><span className='percentag-1'>↑</span> 37.8% </span> this month</div>
                </div>
            </div>

            <div className="bar-2-contents">
            <div className="bar-content-image">
            <img width="80" height="80" src="https://img.icons8.com/ultraviolet/80/purchase-order.png" alt="purchase-order"/>
              </div>
                 <div className="bar-content-description">
                  <div className='des-title'>Orders</div>
                    <div className='dollar'><span style={{color:"rgb(189, 52, 52)"}}>$</span> 2.4k</div>
                  <div className='des-ack'><span style={{color:"rgb(189, 52, 52)"}} className='percentage'><span className='percentag-1' >↓</span> 2% </span> this month</div>
                </div>
            </div>
            <div className="bar-2-contents">
            <div className="bar-content-image">
            <img width="80" height="80" src="https://img.icons8.com/color-glass/96/transaction.png" alt="transaction"/>
              </div>
                 <div className="bar-content-description">
                  <div className='des-title'>Balance</div>
                  <div className='dollar'><span style={{color:"rgb(189, 52, 52)"}}>$</span> 2.9k</div>
                    <div className='des-ack'><span style={{color:"rgb(189, 52, 52)"}} className='percentage'><span className='percentag-1' >↓</span> 3% </span> this month</div>
                </div>
            </div>
            <div className="bar-2-contents">
            <div className="bar-content-image">
            <img width="80" height="80" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Earning-business-goofy-flat-kerismaker.png" alt="external-Earning-business-goofy-flat-kerismaker"/>
              </div>
                 <div className="bar-content-description">
                  <div className='des-title'>Total Sales</div>
                    <div className='dollar'><span style={{color:'Green'}}>$</span> 101k</div>
                  <div className='des-ack'><span className='percentage'><span className='percentag-1'>↑</span> 13.4% </span> this month</div>
                </div>
            </div>
        </div>
  </>
   
  
}

export default Bar2;