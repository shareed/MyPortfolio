import React from 'react';

import "./footer.scss"
function Footer() {
     return (
        <div className = "footer-section">
            <div className = "footer copyright">Copyright © 2020 Shannon Reed </div>
            <div className = "footer contact-info">
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
            </div>
            <div className = "footer footer-contact">
            <form  className = "contact-form"
                action="https://formspree.io/xwkvrqqq"
                method="POST"
                >
                    <h3>Send Me A Message</h3>
                    <label>
                        Your email:
                        </label>
                        <input type="text" name="_replyto" required/>
                    
                    <label>
                        Your message:
                        </label>
                        <textarea name="message"></textarea>
                    <button type="submit">Send</button>
            </form>
            </div>
        </div>
     )
  }
export default Footer;