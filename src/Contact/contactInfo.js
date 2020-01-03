import React from 'react';

import './contact.scss'

const ContactInfo = (props) => {
  return (
            <section className = "contact-info">
               <p>Thanks for visiting my portfolio, and I hope to here from you soon!!.</p>
            <ul className = "contact-footer-icons">
                   <li><i class="fa fa-home"></i>San Diego, Caifornia</li>
                   <li><i class="fa fa-phone"></i>619-547-8164</li>
                   <li><i class="fa fa-envelope"></i>srtechset5@gmail.com</li>
               </ul>
               <ul className = "social">
                   <li><a href = "https://www.linkedin.com/in/shannonreedtechset5/" target = "blank">
                        <i className="fa fa-linkedin-square"></i></a>
                   </li>
                   <li><a href = "https://github.com/shanreed" target = "blank">
                        <i class="fa fa-github"></i></a>
                   </li>
                   <li><a href = "https://twitter.com/laney5net" target = "blank">
                        <i class="fa fa-twitter"></i></a>
                   </li>
               </ul>
            </section>
  );
};

export default ContactInfo;