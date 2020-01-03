import React from 'react';

import './contact.scss'
import Picture from './picture';

import ContactForm from './contactForm';
import ContactInfo from './contactInfo';



const Contact = (props) => {
  return (
    <div className = "contact">
      <div className= "set shadow-pop-tr">
            <Picture className ="mypic" />
            <ContactForm />
            </div>
              <ContactInfo />
    </div>
  );
};

export default Contact;