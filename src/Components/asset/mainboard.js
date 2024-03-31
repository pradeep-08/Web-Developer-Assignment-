import React from 'react'
import '../style/mainboard.css';
import Bar1 from './bar1';
import Bar2 from './bar2';
import Bar3 from './bar3';
import Bar4 from './bar4';



function Mainboard() {
  return <>
    <div className='main-board-div'>
        <Bar1/>
        <Bar2/>
        <Bar3/>
        <Bar4/>
    </div>
  </>
}

export default Mainboard