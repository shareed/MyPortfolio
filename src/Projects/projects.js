import React from 'react';
import {
    Card, CardImg,
  } from 'reactstrap';
import './projects.scss'
import bgproject from '../assets/bgproject.png'
import portfolio1project from '../assets/portfolio1project.png'
import musiccollectionproject from '../assets/musiccollectionproject.png'
import lilianportfolio from '../assets/lilianportfolio.png'
import resume from '../assets/resume.png'


const Projects = (props) => {
  return (
    <section className='projects'>
      <section className = "project shadow-pop-tr">
        <h3>Projects</h3>
        <Card>
        <CardImg top width="100%" src={bgproject} alt="Card image cap" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua.</p>
      </Card>   
      </section>
      <section className = "project shadow-pop-tr">
      <h3>Projects</h3>
        <Card>
        <CardImg top width="100%" src={portfolio1project} alt="Card image cap" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua.</p>
      </Card>   
      </section>
      <section className = "project shadow-pop-tr">
      <h3>Projects</h3>
        <Card>
        <CardImg top width="100%" src={musiccollectionproject} alt="Card image cap" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua.</p>
      </Card>   
      </section>
      <section className = "project shadow-pop-tr">
      <h3>Projects</h3>
        <Card>
        <CardImg top width="100%" src={resume} alt="Card image cap" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua.</p>
      </Card>    
      </section>
      <section className = "project shadow-pop-tr">
        <h3>Projects</h3>
        <Card>
        <CardImg top width="100%" src={lilianportfolio} alt="Card image cap" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua.</p>
      </Card>   
      </section>
      <section className = "project shadow-pop-tr">
      <h3>Projects</h3>
        <Card>
        <CardImg top width="100%" src={bgproject} alt="Card image cap" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua.</p>
      </Card>   
      </section>
      <section className = "project shadow-pop-tr">
      <h3>Projects</h3>
        <Card>
        <CardImg top width="100%" src={bgproject} alt="Card image cap" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua.</p>
      </Card>   
      </section>
      <section className = "project shadow-pop-tr">
      <h3>Projects</h3>
        <Card>
        <CardImg top width="100%" src={bgproject} alt="Card image cap" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
           dolore magna aliqua.</p>
      </Card>    
      </section>
    </section>
  );
}

export default Projects;