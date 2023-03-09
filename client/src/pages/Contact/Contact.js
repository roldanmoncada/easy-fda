import React, { useRef, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import "animate.css";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    document.title = ` Easy-FDA | About `;
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c91mm1b",
        "template_86th9be",
        form.current,
        "F5832ZDfVw0AeBGoM"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire({
              icon: "success",
              title: "Email Sent",
              text: "Thanks for your feedback!",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Email Send failed",
              text: "Sorry, please try it later.",
            });
          }
        },
        (error) => {
          console.error(error.text);
          Swal.fire({
            icon: "error",
            title: "Email Send failed",
            text: "Sorry, please try it later.",
          });
        }
      );
  };

  return (
    <div className="contactContainer">
      <form ref={form} onSubmit={sendEmail}>
        <h1>Contact Us Form</h1>
        <input
          type="text"
          id="firstName"
          name="first_name"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          id="lastName"
          name="last_name"
          placeholder="Last Name"
          required
        />
        <input type="email" id="email" placeholder="Email" required />
        <input type="text" id="mobile" placeholder="Mobile" required />
        <h4>Type Your Message Here...</h4>
        <textarea required name="feedback"></textarea>
        <input type="submit" value="Send" id="button" />
      </form>
    </div>
  );
};

export default Contact;
