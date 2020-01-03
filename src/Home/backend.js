import React from 'react';


import './home.scss'
import skillsicon from '../assets/skillsicon.svg'

const Backend = (props) => {
  return (
      <section className = "skill shadow-pop-tr">
      <h3>BackEnd Development</h3>
        <ul className = "icons">
          <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon">XML</li></p>
        </div>
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon">PHP</li></p>
        </div>
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon">Nodejs</li></p>
        </div>
    
        </ul>
        <p>Working with teams of developers creating and updating website content, has given me valuable collaboration, 
           problem sloving and time mangement skills.</p>>    
      </section>
     
  );
}

export default Backend;