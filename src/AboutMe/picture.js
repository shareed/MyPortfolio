import React from 'react';

import './aboutme.scss'
import shannon from '../assets/me.jpg'
const Picture = (props) => {
  return (
            <section className = "each picture-section">
               <img className = "me" src = {shannon} alt = "Shannon" />
            </section>
  );
};

export default Picture;