import React from 'react'
import '../style/bar2.css';
import CountUp from "react-countup";


function Bar2() {
//   const counters = document.querySelectorAll('.counter');
// const speed = 100; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });

  return <>
         <div className="bar-2">
            <div className="bar-2-contents">
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