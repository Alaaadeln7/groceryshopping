import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import ContactImg from "../../assets/images/contact/contact.svg";
import Frame, { Img, Text } from '../../components/frame/Frame';
import './contact.scss'
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_113400t', 'template_ajve19k', form.current, 'yGGquPnT2BkcciTZ2')
      .then((result) => {
        setTimeout(() => {
          document.querySelector(".declartion").style.opacity = '1'
        }, 1000)
        clearTimeout()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact">
      <div className="container">
        <Frame>
          <div className='text'>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='user_name' onBlur={(event) => {
                if (event.target.value !== '') {
                  event.target.style.border = "1px solid green";
                  event.target.style.color = 'green';
                } else {
                  event.target.style.border = "1px solid red";
                  event.target.setAttribute("placeholder", "Please enter Username");
                  event.target.style.color = 'red';
                  event.target.style.animation = 'error .3s ease';
                }
              }} placeholder='name' id='username' />
              <input type="email" name='user_email' onBlur={(event) => {
                if (event.target.value !== '') {
                  event.target.style.border = "1px solid green";
                  event.target.style.color = 'green';
                } else {
                  event.target.style.border = "1px solid red";
                  event.target.setAttribute("placeholder", "Please enter E-mail");
                  event.target.style.color = 'red';
                  event.target.style.animation = 'error .3s ease';
                }
              }} placeholder='E-mail' id='email' />
              <textarea name="message" placeholder='Message ...' />
              <input type="submit" value="Send" />
            </form>
          </div>
          <Img imgSrc={ContactImg} />
        </Frame>
      </div>
    </section>
  )
}