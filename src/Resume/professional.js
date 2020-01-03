import React from 'react';

import './resume.scss'

const Professional = (props) => {
  return (
            <section className = "each professional-section">
                <h3>PROFESSIONAL SKILLS</h3>
                <hr/>
                <div className = 'all-professional'>
                    <div className = 'professional'>
                        <h5><span>TECHNICAL SKILLS</span></h5>
                        <ul>
                            <li>Responsive Design</li>
                            <li>Unit Testing</li>
                            <li>Verison Control</li>
                            <li>Debugging</li>
                            <li>Object Oriented Design</li>
                            <li>Basic Database Knowledge</li>
                            <li>Creating and Using Design files</li>
                            <li>Debugging</li>
                        </ul>
                    </div>
                    <div className = 'professional'>
                        <h5><span>SOFT SKILLS</span></h5>
                        <ul>
                            <li>Creative</li>
                            <li>Leadership</li>
                            <li>Communication</li>
                            <li>Critical Thinking</li>
                            <li>Team Work</li>
                            <li>Problem Solving</li>
                            <li>Accountablity</li>
                            <li>Time Mangement</li>
                        </ul>
                    </div>
                    </div>
            </section>
           
           
       
  );
};

export default Professional;