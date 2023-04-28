import React, { useState } from "react";
import "./ContactSection.css";

function ContactSection() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
console.log(contactData);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate name field
    if (!contactData.name.trim()) {
      setNameError("Please enter your name.");
      return;
    } else {
      setNameError("");
    }

    // Validate email field
    if (!contactData.email.trim()) {
      setEmailError("Please enter your email.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(contactData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    // Validate message field
    if (!contactData.message.trim()) {
      setMessageError("Please enter your message.");
      return;
    } else {
      setMessageError("");
    }

    // If all fields are valid, submit the form
    alert("Thank you for submitting the form!");
    setContactData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={contactData.name}
            onChange={(event) =>
              setContactData({ ...contactData, name: event.target.value })
            }
            required
          />
          {nameError && <span className="error">{nameError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={contactData.email}
            onChange={(event) =>
              setContactData({ ...contactData, email: event.target.value })
            }
            required
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={contactData.message}
            onChange={(event) =>
              setContactData({ ...contactData, message: event.target.value })
            }
            required
          ></textarea>
          {messageError && <span className="error">{messageError}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactSection;
