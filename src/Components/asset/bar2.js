import React, { useEffect} from 'react';
import '../style/bar2.css';
import CountUp from "react-countup";
import AOS from 'aos';

function Bar2() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);


  return <>
         <div className="bar-2">
            <div  data-aos="fade-zoom-out" className="bar-2-contents">
              <div className="bar-content-image">
                <img width="80" height="80" src="https://img.icons8.com/color/96/us-dollar-circled--v1.png" alt="us-dollar-circled--v1"/>
              </div>
                 <div className="bar-content-description">
                  <div className='des-title'>Earning</div>
                    <div className='dollar'><span style={{color:'Green'}}>$</span> <CountUp duration={15} className="counter" end={198} />.<CountUp duration={10} className="counter" end={9} />k </div>
                  <div className='des-ack'><span className='percentage'><span className='percentag-1'>↑</span><CountUp duration={10} className="counter" end={37.8} />% </span> this month</div>
                </div>
            </div>

            <div className="bar-2-contents">
            <div className="bar-content-image">
            <img width="80" height="80" src="https://img.icons8.com/ultraviolet/80/purchase-order.png" alt="purchase-order"/>
              </div>
                 <div className="bar-content-description">
                  <div className='des-title'>Orders</div>
                    <div className='dollar'><span style={{color:"rgb(189, 52, 52)"}}>$</span> <CountUp duration={30} className="counter" end={2.4} />.4k</div>
                  <div className='des-ack'><span style={{color:"rgb(189, 52, 52)"}} className='percentage'><span className='percentag-1' >↓</span> <CountUp duration={10} className="counter" end={2} /> % </span> this month</div>
                </div>
            </div>
            <div className="bar-2-contents">
            <div className="bar-content-image">
            <img width="80" height="80" src="https://img.icons8.com/color-glass/96/transaction.png" alt="transaction"/>
              </div>
                 <div className="bar-content-description">
                  <div className='des-title'>Balance</div>
                 
                  <div className='dollar'><span style={{color:"rgb(189, 52, 52)"}}>$</span> <CountUp duration={12} className="counter" end={2.4} />.<CountUp duration={15} className="counter" end={9} />k</div>
                    <div className='des-ack'><span style={{color:"rgb(189, 52, 52)"}} className='percentage'><span className='percentag-1' >↓</span> <CountUp duration={10} className="counter" end={3} />.4% </span> this month</div>
                </div>
            </div>
            <div className="bar-2-contents">
            <div className="bar-content-image">
            <img width="80" height="80" src="https://img.icons8.com/external-goofy-flat-kerismaker/96/external-Earning-business-goofy-flat-kerismaker.png" alt="external-Earning-business-goofy-flat-kerismaker"/>
              </div>
                 <div className="bar-content-description">
                  <div className='des-title'>Total Sales</div>
                    <div className='dollar'><span style={{color:'Green'}}>$</span> <CountUp duration={12} className="counter" end={101} />.<CountUp duration={18} className="counter" end={7} />k</div>
                  <div className='des-ack'><span className='percentage'><span className='percentag-1'>↑</span> <CountUp duration={10} className="counter" end={27.8} />.5% </span> this month</div>
                </div>
            </div>
        </div>
  </>
   
  
}


export default Bar2;