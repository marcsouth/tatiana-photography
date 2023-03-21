import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8gy9iz7', 'template_e3uov1h', form.current, 'SmNd-ROtCevCsaMoC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name*</label>
      <input type="text" name="user_name" required/>
      <label>Email*</label>
      <input type="email" name="user_email" required/>
      <label>Message*</label>
      <textarea name="message"  required/>
      <p className='contactp'>By submitting this form you will be added to our mailing list.</p>
      <input type="submit" value="Send" className='submitbutton' />
    </form>
  );
};