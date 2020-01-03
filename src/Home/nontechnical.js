import React from 'react';


import './home.scss'
import skillsicon from '../assets/skillsicon.svg'
import Frontend from './frontend';
import Backend from './backend';

const NonTechnical = (props) => {
  return (
      <section className = "skill shadow-pop-tr">
        <h3>Non-Technical</h3>
        <ul className = "icons">
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon non-technical time">Time Mangement</li></p>
        </div>
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon non-technical team">Team Work</li></p>
        </div>
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon non-technical problem">Problem Solving</li></p>
        </div>
        </ul>
        <p>Working with teams of developers creating and updating website content, has given me valuable collaboration, 
           problem sloving and time mangement skills.</p> 
        
      </section>
  );
}

export default NonTechnical;