import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import toast from "react-hot-toast";
import contact from './Media/contact-us.gif'

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5jah7ec",
        "template_sgikdpf",
        form.current,
        "5CUSoA-msV9Ptta_-"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message Sent Successfully!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const StyledContactForm = styled.div`
    width: 400px;
    form {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
      font-size: 16px;
      input {
        width: 100%;
        height: 35px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }
      textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        max-height: 100px;
        min-height: 100px;
        padding: 7px;
        outline: none;
        border-radius: 5px;
        border: 1px solid rgb(220, 220, 220);
        &:focus {
          border: 2px solid rgba(0, 206, 158, 1);
        }
      }
      label {
        margin-top: 1rem;
      }
      input[type="submit"] {
        margin-top: 2rem;
      }
    }
  `;
  return (
    <div className="bg-white" style={{backgroundImage:`url(${contact})`,backgroundRepeat:'no-repeat',backgroundPositionX:'right'}}>
      <StyledContactForm className="w-11/12 mx-auto py-32">
        <h2 className="text-center text-4xl font-bold text-info">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input className="btn btn-info" type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </div>
  );
};

export default ContactUs;
