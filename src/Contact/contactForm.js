import React from 'react';

import './contact.scss'



const ContactForm = (props) => {
    return (
      <section className="form ">
        
<form 
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
</section>     
    );
  };
  
  export default ContactForm;