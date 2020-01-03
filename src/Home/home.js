import React from 'react';


import './home.scss'
import skillsicon from '../assets/skillsicon.svg'
import Frontend from './frontend';
import Backend from './backend';
import NonTechnical from './nontechnical';
import Technical from './technical';

const Home = (props) => {
  return (
    
    <section className='skills'>
        <Frontend />
        <Backend />
      <Technical />
      <NonTechnical />
    </section>
  );
}

export default Home;