import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import '../HeroArea/hero.scss';
import creative from '../assets/creative.svg'

const Hero = (props) => {
  return (
    <div>
      <Jumbotron  className= "jumbotron">
        <section className="heading wrapper ">
          <div className = "name">
        <h1 className = 'slide-in-left'>Shannon Reed</h1>
        </div>
        <div className = 'svg'>
        <img className = "rotate-90-cw" src ={creative} />
        <p className = 'svg-code'>CREATED <br/>  to be <br/>  CREATIVE</p>
        </div>
        </section>
        <p className="sub">Full Stack Web Developer.</p>
        <hr/>
        <p className = "motto">Solving problems with coding solutions.</p>
        <p className="lead">
        <a href = "https://www.linkedin.com/in/shannonreedtechset5/" target = "blank">
          <i className="fa fa-linkedin-square"></i>
          </a>
          <a href = "https://github.com/shanreed" target = "blank">
        <i class="fa fa-github"></i>
        </a>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Hero;