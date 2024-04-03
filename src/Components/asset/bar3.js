import React from 'react'
import '../style/bar3.css';
import {  Circle } from 'rc-progress';
import CountUp from "react-countup";

function Bar3() {

  return <>
   <div className="bar-3">
        <div className="bar-3-contents-1">
            <div className="bar-inner-content-1">
            <div> <h3 className='overview' style={{marginBottom:"2"}}>Overview</h3>
                <div className="monthly-earing" >Monthly Earning</div>
                 </div>
              <div className="drop-down">Quarterly<img width="10" height="10" src="https://img.icons8.com/metro/26/EBEBEB/sort-down.png" alt="sort-down"/></div>
                </div>

            <div className="bar-inner-content-2">
                  <div className="static-bar-1"><div className="child-1"></div></div>
                  <div className="static-bar-2"><div className="child-2"></div></div>
                  <div className="static-bar-3"><div className="child-3"></div></div>
                  <div className="static-bar-4"><div className="child-4"></div></div>
                  <div className="static-bar-5"><div className="child-5"></div></div>
                  <div className="static-bar-6"><div className="child-6"></div></div>
                  <div className="static-bar-7"><div className="child-7"></div></div>
                  <div className="static-bar-8"><div className="child-8"></div></div>
                  <div className="static-bar-9"><div className="child-9"></div></div>
                  <div className="static-bar-10"><div className="child-10"></div></div>
                  <div className="static-bar-11"><div className="child-11"></div></div>
                  <div className="static-bar-12"><div className="child-12"></div></div>
            </div>
            <div className="bar-inner-content-3">
                <div className="static-bar-month">Jan</div>
                <div className="static-bar-month">Feb</div>
                <div className="static-bar-month">Mar</div>
                <div className="static-bar-month">Apr</div>
                <div className="static-bar-month">May</div>
                <div className="static-bar-month">June</div>
                <div className="static-bar-month">July</div>
                <div className="static-bar-month">Aug</div>
                <div className="static-bar-month">Sep</div>
                <div className="static-bar-month">Oct</div>
                <div className="static-bar-month">Nov</div>
                <div className="static-bar-month">Dec</div>
            </div>
        </div>
            <div className="bar-3-contents-2">
              <div className="bar-inner-content-1"> <div> <h3 style={{marginBottom:"2"}}>Customers</h3>
                  <div className="monthly-earing" >Customers that buy products</div>
                     </div>
                    </div>
                    <div className='bar-inner-content-child'>
                 <div className="bar-inner-content-02">
                <div className='process-bar'>
                <div className='percentage-count' ><span className='percentage-responsive'><CountUp duration={30} className="counter" end={65} /> % </span>
                <div style={{fontSize :"15px", fontWeight:"500", color:"rgb(166, 166, 212)", paddingLeft:"15px"}}>Total New Customers</div></div>
                <Circle  trailWidth={10} trailColor="rgb(166, 166, 212)" strokeLinecap="square" percent={65} strokeWidth={16} strokeColor="#6a41c4" /> 
                </div>
               
                 </div>
                 </div>
            </div>
        </div>
  </>
}

export default Bar3;