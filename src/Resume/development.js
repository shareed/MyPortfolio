import React from 'react';

import './resume.scss'

const Development = (props) => {
  return (
            <section className = "each development-section">
                <h3>DEVELOPMENT SKILLS</h3>
                <hr/>
                <div className = 'all-development'>
                    <div className = 'development'>
                        <h5><span><em>LANGUAGES</em></span></h5>
                            <ul>
                                <li>JavaScript</li>
                                <li>SQL</li>
                                <li>SASS</li>
                                <li>PHP</li>
                                <li>Nodejs</li>
                            </ul>
                    </div>
                    <div className = 'development'>
                        <h5><span>LIBRARIES</span></h5>
                            <ul>
                                <li>React</li>
                                <li>HTML</li>
                                <li>SASS</li>
                                <li>PHP</li>
                                <li>Nodejs</li>
                            </ul>
                    </div>
                    <div className = 'development'>
                        <h5><span>FRAMEWORKS</span></h5>  
                            <ul>
                                <li>React</li>
                                <li>Express</li>
                                <li>Larvel</li>
                                <li></li>
                                <li></li>
                            </ul> 
                    </div>
                    <div className = 'development'>
                        <h5><span>DATABASES</span></h5>
                            <ul>
                                <li>MySQL</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li></li>
                                <li></li>
                            </ul>
                    </div>
                </div>
            </section>
  );
};

export default Development;