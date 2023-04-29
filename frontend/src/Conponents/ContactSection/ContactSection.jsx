import React, { useState } from "react";
import "./ContactSection.css";

function ContactSection() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
console.log(contactData)


  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, message } = contactData;

    const res = await fetch("http://localhost:8003/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify({
                name, email, message
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 201 || data) {
          setContactData(data)
          alert("Thank you");
          setContactData();

        } else {
          console.log("error ");
          alert("error");
        }
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
         
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactSection;
