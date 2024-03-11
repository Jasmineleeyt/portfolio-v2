import React from 'react';
import { useState } from 'react';
import { MdOutlineMessage  } from 'react-icons/md';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

// Import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function contactForm() {
  // Create state variables for the fields in the form and setting initial values to an empty string
  const [fname, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the name and value of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const userInput = target.value;

    // Set the state of either email, username, or message depending on the input type
    if (inputType === 'fname') {
      setName(userInput);
    } else if (inputType === 'email') {
      setEmail(userInput);
    } else {
      setMessage(userInput);
    }
  };

  const contactFormSubmit = (e) => {

    e.preventDefault();

    // Check to see if any of the fields are empty and if the email is valid.
    if (!fname || !email || !message) {
        alert('Please fill out all the requried fields.');
        return;
    } 
    if (!validateEmail(email)) {
        alert('Please provide an valid email.');
        return;
    }
    alert(`Thank you for your message, ${fname}. I will get in touch with you shortly.`);

    // Clear out the input after a successful registration.
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container text-center">
      <h2>Say Hi To Jasmine <MdOutlineMessage /></h2>
      <Form className="form" onSubmit={contactFormSubmit}>
        <Form.Group controlId="fname">
          <Form.Control value={fname} name="fname" onChange={handleInputChange} type="text" placeholder="Name" className="contact-input"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control value={email} name="email" onChange={handleInputChange} type="email" placeholder="Email" className="contact-input"/>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control as="textarea" rows={5} value={message} name="message" onChange={handleInputChange} type="text" placeholder="Message" className="contact-input"/>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default contactForm;
