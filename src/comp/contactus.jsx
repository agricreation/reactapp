import React, { useState } from "react";
import "../assets/css/contactus.css";
import axios from "axios";

export default function Contact(){
    const [formData, setFormData] = useState({
        title: "",
        telegram: "",
        content: ""
      });
    const submitToApi = async () => {
        try {
          const response = await axios.post(
            "https://contact.agricreations.com/submit",
            formData
          );
          console.log(response.data);
          // Handle success response if needed
        } catch (error) {
          console.error(error);
          // Handle error if needed
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
        submitToApi();
      };
    return(
        <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Agricreations contact</title>
  
<>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Agricreations contact</title>

  <div className="main-content p-5 bg-dark">
    <form action="submit" method="post">
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label poppins"
        >
          Email address
        </label>
        <input
          name="title"
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label poppins"
        >
          Telegram link
        </label>
        <input
          name="telegram"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="t.me/moovendhan"
        />
      </div>
      <div className="mt-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label poppins"
        >
          What you need
        </label>
        <textarea
          placeholder="Discribe what you think we will be reachout as soon as possible"
          name="content"
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          defaultValue={""}
        />
      </div>
      <button onClick={handleSubmit} type="submit" className="btn btn-primary w-100 text-light mt-2">
        Send discord message
      </button>
      <div className="social">
        <div className="socialButtons d-flex flex-wrap justify-content-center mt-3 poppins">
          <a target="_blank" href="/mail">
            <p>Mail</p>
          </a>
          <a target="_blank" href="/telegram">
            <p>Telegram</p>
          </a>
          <a target="_blank" href="/whatsapp">
            <p>Whatsapp</p>
          </a>
        </div>
      </div>
    </form>
  </div>
</>

</>
    )
}