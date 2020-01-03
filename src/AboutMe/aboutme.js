import React from 'react';

import './aboutme.scss'
import Picture from './picture';
import Info from './info';



const AboutMe = (props) => {
  return (
    <div className = "shadow-pop-tr aboutme">
            <Picture />

            <Info />
            
            
        
    </div>
  );
};

export default AboutMe;