import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} autoComplete="on" className="Contact">
      <input placeholder="Name" type="text" name="user_name" />
      <input placeholder="Email" type="email" name="user_email" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;