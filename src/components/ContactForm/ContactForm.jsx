import React, { useState } from "react";
import "./ContactForm.css";


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3002/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
   <>
      <div className="container">
        <div className="aforms" >
          <img className="dinopic" src="https://i.imgur.com/r0HyzSU.png" />
          <form className="form1">
            <div className="contact-info">
              <h1 className="title2">Let's get in touch</h1>
              <p className="text">
                Hola! here is our contact information, feel free to reach out with any questions about our classes or materials. 
              </p>
              
              <div className="information">
              <img src="https://i.imgur.com/0dVtHF4.png" class="icon" alt="" />
                2344 Market St. San Francisco, CA 94114
              </div>
              <div className="information">
                <img src="https://i.imgur.com/o6XcIpV.png" class="icon" alt="" />
                msdani.dinoamigo@gmail.com 
              </div>
              <div className="information">
                <img src="https://i.imgur.com/F7j8mmN.png" class="icon" alt="" />
                123-456-7890
                </div>
            </div>   
          </form>
        </div>
        <div className="contactinfo3">  
          <form className="form2" onSubmit={handleSubmit}>
            <div className="enterinfo">              
              <h1 className="title2">Contact Us</h1>              
              <div>
                <input className="name" type="text" id="name" placeholder="name" required />
              </div>
              <div>
                <input className="email" type="email" id="email" placeholder="email" required />
              </div>
              <div>
                <input className="message" id="message" placeholder="message" required />
              </div>
              <button className="button1" type="submit">{status}</button>
            </div>
          </form>
          <img className="dinopic2" src="https://i.imgur.com/NPkdijE.png" />
        </div>
      </div>
    </>
  );
};

export default ContactForm;