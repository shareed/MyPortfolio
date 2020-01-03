import React from 'react';

import './resume.scss'
import Education from './education';
import Experience from './experience';
import Development from './development';
import Professional from './professional';
import Projects from './projects';


const Resume = (props) => {
  return (
    <div className = "resume shadow-pop-tr">
        <header>
            <h1>Shannon Reed</h1>
            <h2>FULL STACK WEB DEVELOPER</h2>
            <p>srtech5set@gmail.com | 619-547-8164 | https://www.linkedin.com/in/shannonreedtechset5/ | https://github.com/shanreed</p>
        </header>

        <section className = "all">
            <Education />

            <Experience />
            <Development />
            <Professional />
            <Projects />
        </section>
        
    </div>
  );
};

export default Resume;