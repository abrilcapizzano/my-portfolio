import React from "react";
import "./contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import wpp from "./whatsappicon.svg";
import { useForm, ValidationError } from '@formspree/react';
function Contacto() {
    const [state, handleSubmit] = useForm("mjvdozwr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <div className="contacto">
        <h2>Contact me by WhatsApp</h2>
        <a href="https://wa.me/541124682268/" target="_blank" rel="noreferrer">
        <img src={wpp} className="icon" alt="Whatsapp Logo" />
 </a>

 <form onSubmit={handleSubmit}>
 <h2>Or Email</h2>
  <label className="label-input">Type your Email</label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Your email address"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <label className="label-input">Leave your message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Leave your message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}
function App() {
  return (
    <Contacto/>
  );
}
export default App;