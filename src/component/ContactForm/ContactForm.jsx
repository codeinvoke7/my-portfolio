import classes from "./ContactForm.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import HeaderFooter from "../Header/HeaderFooter";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState("SEND MESSAGE");
  const [spinner, setSpinner] = useState(false);
  const [inputs, setInputs] = useState({});
  const [resultMsg, setResultMsg] = useState("");
  const [error, setError] = useState("")

  // 
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading("SENDING...");
    setSpinner(!spinner)
    // setTimeout(load, 2000);
    // function load() {
    //   setLoading("SEND MESSAGE");
    // }

    emailjs
      .sendForm(
        "service_ktpke5o",
        "template_9zvqq7o",
        form.current,
        "tFY4341kx_Z3ShQkN"
      )
      .then(
        (result) => {
          setTimeout(resultTimeout, result.text);
          function resultTimeout() {
            result && setResultMsg("Message sent successfully");
            setTimeout(load, result.text);
          function load() {
            setLoading("SEND MESSAGE");
            setSpinner(false)
          }

          };
          setTimeout(setResultTimeout, 6000)
          function setResultTimeout(){
            setResultMsg("");
          }
          console.log(result.text);
        },
        (error) => {
          setTimeout(errorTimeout, error.text);
          function errorTimeout() {
            error && setError("Message not sent!. Check your network connection");
            setTimeout(load, error.text);
            function load() {
              setLoading("SEND MESSAGE");
              setSpinner(false)
            }
            
          }
          setTimeout(setErrorTimeout, 6000)
          function setErrorTimeout(){
            setError("");
          }
          console.log(error);
        }
      );

    setInputs({});
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className={`${classes.bg} container-fluid`}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <div className="col text-white mt-5">
            <h1>Contact</h1>
            <p>
              I would love to hear about your project and how I could help.{" "}
              <br />
              Please fill in the form and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <div className={`${classes.input} col text-secondary`}>
            <form ref={form} onSubmit={sendEmail} className="form-floating">
              <div className="form-floating">
                <input
                required
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="floatinginput"
                  name="from_name"
                  // ref={nameInputRef}
                  value={inputs.from_name || ""}
                  onChange={inputHandler}
                />
                <label htmlFor="floatinginput">Name</label>
              </div>

              <div className="form-floating">
                <input
                required
                  type="email"
                  className="form-control"
                  id="floatingemail"
                  placeholder="E-mail"
                  name="from_email"
                  // ref={emailInputRef}
                  value={inputs.from_email || ""}
                  onChange={inputHandler}
                />
                <label htmlFor="floatingemail">E-mail</label>
              </div>

              <div className="form-floating">
                <textarea
                required
                  className="form-control"
                  placeholder="Message"
                  id="floatingmessage"
                  name="message"
                  // ref={messageInputRef}
                  value={inputs.message || ""}
                  onChange={inputHandler}
                />
                <label htmlFor="floatingmessage">Message</label>
              </div>
                <p style={resultMsg ? {color:"#29e79e"} : {color:"red"}}>{resultMsg ? resultMsg : error}</p>
              <div className="d-flex justify-content-end mx-5 pt-2 px-2 ">
                <button
                  className="text-white"
                  style={{
                    textDecoration: "underline #29e79e",
                    textUnderlineOffset: ".6em",
                    background: "transparent",
                    border: "0px",
                  }}
                  type="submit"
                >
                  {loading}{spinner && <div class="spinner-border spinner-border-sm text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>}
                  
                </button>
              </div>
            </form>
          </div>
        </div>
        <hr className="border border-light border-0.1 opacity-90 mt-5"></hr>
        <HeaderFooter />
      </div>
    </div>
  );
};

export default ContactForm;
