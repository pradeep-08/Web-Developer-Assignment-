import React from 'react'
import '../style/bar4.css';


function Bar4() {
  return <>
        <div className="bar-4">
        <div className="bar-4-contents-1">
           <div className="bar-filled-contents">
              <h3 style={{ color:"#1e327b"}}>Product Sell</h3>
           <div className='bar-4-contains'>
               <div className="username-1"> 
                   <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="search--v1"/>
                   <input type="text" placeholder='Search' size="15"/>
                 </div>
              <div className="drop-down">Last 30 days<img width="10" height="10" src="https://img.icons8.com/metro/26/EBEBEB/sort-down.png" alt="sort-down"/></div>
          </div>
       </div>
        </div>
        <div className="bar-4-contents-2"></div>
       
        
        </div>
  </>

  
}

export default Bar4
