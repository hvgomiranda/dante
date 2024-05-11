import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1h99iga', 'template_atwnb89', form.current, {
        publicKey: '1hQLktOB4HoNh3TxB',
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
      <input placeholder="Message" type="text" name="user_message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact;