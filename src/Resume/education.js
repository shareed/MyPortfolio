import React from 'react';

import './resume.scss'

const Education = (props) => {
  return (
            <section className = "each education-section">
                <h3>EDUCATION</h3>
                <hr/>
                    <div className = 'education'>
                        <p>MARCH 2019 – MARCH 2020</p>
                        <h5><span>FULL STACK WEB DEVELOPMENT,</span> LAMBDA SCHOOL</h5>
                    </div>
                    <div className = 'education'>
                        <p>MAY 2017 – FEBRUARY 2020</p>
                        <h5><span>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY,</span> COLORADO TECHNICAL UNIVERSITY</h5>
                    </div>
                    <div className = 'education'>
                        <p>SEPTEMBER 2013 – AUGUST 2015</p>
                        <h5><span>ASSOCIATE OF SCIENCE IN COMPUTER NETWORKING & SECURITY,</span> BROWN MACKIE COLLEGE</h5>
                    </div>
            </section>
  );
};

export default Education;