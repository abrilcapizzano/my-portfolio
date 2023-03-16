import React from "react";
import "./contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import wpp from "./whatsapp.svg";
import { useForm, ValidationError } from '@formspree/react';
function Contacto() {
    const [state, handleSubmit] = useForm("mjvdozwr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <div className="contacto">
        <h2>Feel free to send me a message</h2>
        <a href="https://wa.me/541124682268/" target="_blank" rel="noreferrer">
<img src={wpp} className="icon" alt="Whatsapp Logo" />
 </a>
 <form onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Type your email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
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