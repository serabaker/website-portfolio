import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact wrapper">
        <h1 className="contact-h1">Let's Connect</h1>
        <form action="" className="contact-form">
          <label className="contact-label" for="firstName">
            First:{" "}
          </label>
          <input
            className="contact-input"
            type="text"
            name="fname"
            placeholder="First Name"
          />
          <label className="contact-label" for="lastName">
            Last:{" "}
          </label>
          <input
            className="contact-input"
            type="text"
            name="lname"
            placeholder="Last Name"
          />
          <label className="contact-label" for="email">
            Email:{" "}
          </label>
          <input
            className="contact-input"
            type="email"
            name="email"
            placeholder="Valid Email"
          />
          <input type="text" name="message" placeholder="Leave a message" />

          <button className="contact-button" type="submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
