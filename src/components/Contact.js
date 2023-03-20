import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "./contact-img.svg";
import "./Contact.css"
import "animate.css"
import TrackVisibility from 'react-on-screen';
import { useForm } from '@formspree/react';
const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdgyzr");
  if (state.succeeded) {
    return alert("Thankyou for the Message!")
  }
  return (
    <section className="contact_con" id="contact">
      <TrackVisibility>
        {({ isVisible }) =>
          <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
        }
      </TrackVisibility>
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}  >
            <h2>Get In Touch</h2>
            <div className='formInfo'>
              <form onSubmit={handleSubmit}>

                <input name="username" type="text" placeholder="First Name" />

                <input name="email" type="email" placeholder="Email Address" />

                <textarea name="message" rows="6" placeholder="Message" ></textarea>
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>}
      </TrackVisibility>
    </section>
  )
}

export default Contact
