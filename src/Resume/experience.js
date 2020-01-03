import React from 'react';

import './resume.scss'

const Experience = (props) => {
  return (
            <section className = "each experience-section">
                <h3>PROFESSIONAL EXPERIENCE</h3>
                <hr/>
                    <div className = 'experience'>
                        <p>JULY 2019 - PRESENT</p>
                        <h5><span>TEAM LEAD,</span> LAMBDA SCHOOL</h5>
                            <ul>
                                <li>Work with a team of developers to help guide students through the curriculum </li>
                                <li>Lead teams of four or more developers, to build React Applications.</li>
                            </ul>
                    </div>
                    <div className = 'experience'>
                        <p>MARCH 2015 – DECEMBER 2015</p>
                        <h5><span>NETWORK ADMINSTRATOR,</span> SUDDENLINK</h5>
                            <ul>
                                <li>Helped implement better networking solutions.</li>
                                <li>Network and Security monitoring</li>
                            </ul>
                    </div>
            </section>      
  );
};

export default Experience;