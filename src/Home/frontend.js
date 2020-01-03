import React from 'react';


import './home.scss'
import skillsicon from '../assets/skillsicon.svg'

const Frontend = (props) => {
  return (
      <section className = "skill shadow-pop-tr">
        <h3>FrontEnd Development</h3>
        <ul className = "icons">
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon">SASS</li></p>
        </div>
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon">AJAX</li></p>
        </div>
        <div className = 'svg'>
        <img className = 'svg-image' src ={skillsicon} />
        <p className = 'svg-code'><li className = "icon">React</li></p>
        </div>
        </ul>
        <p>I bring deisgns to life with technology,
           using the core elements of frontend development
           to create responsive websites with great user experience.</p>   
      </section>
      
  );
}

export default Frontend;