import React from 'react';
import './home.scss'
import skillsicon from '../assets/skillsicon.svg'
import Frontend from './frontend';
import Backend from './backend';

const Technical = (props) => {
  return (
      <section className = "skill shadow-pop-tr">
        <h3>Technical</h3>
        <ul className = "icons">
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon non-technical time">Testing</li></p>
        </div>
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon non-technical team">Version Control</li></p>
        </div>
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon non-technical problem">SEO</li></p>
        </div>
        </ul>
        <p>Working with teams of developers creating and updating website content, has given me valuable collaboration, 
           problem sloving and time mangement skills.</p>
        
      </section>
  );
}

export default Technical;