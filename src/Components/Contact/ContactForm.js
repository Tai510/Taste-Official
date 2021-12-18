import React, { useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase/app";
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // db.collection("messages")
    //   .add({
    //     name: name,
    //     email: email,
    //     message: message,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   })
    //   .then(() => {
    //     alert("Thank You! We will get back to you.");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     console.log("Didnt send message!!!");
    //   });

      emailjs.sendForm('service_a00mso8', 'template_inhzoec', e.target, 'user_eTVdymUq7lrCAxWKbDBqg')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

    // setName("");
    // setEmail("");
    // setMessage("");    
  };

  return (
    <div id='contact-form' className="ContactForm">
      <form className="form-div" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          // value={name}
          name='name'
          // onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="Enter Email"
          // value={email}
          name='email'
          // onChange={(e) => setEmail(e.target.value)}
        ></input>
        <textarea
          placeholder="Message"
          // value={message}
          name='message'
          // onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {/* <button className='contact-submit-button' disabled={(!name, !email, !message)} type="submit">
          Submit
        </button> */}
        <button className='contact-submit-button' type="submit" value="Send Message">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
