import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactSection;
