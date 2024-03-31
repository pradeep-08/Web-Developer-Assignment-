import React from 'react'
import '../style/mainboard.css';

function Mainboard() {
  return <>
    <div className='main-board-div'>
        <div className="bar-1"></div>
        <div className="bar-2">
            <div className="bar-2-contents"></div>
            <div className="bar-2-contents"></div>
            <div className="bar-2-contents"></div>
            <div className="bar-2-contents"></div>
        </div>
        <div className="bar-3">
        <div className="bar-3-contents-1"></div>
            <div className="bar-3-contents-2"></div>
        </div>
        <div className="bar-4"></div>
        
    </div>
  </>
}

export default Mainboard