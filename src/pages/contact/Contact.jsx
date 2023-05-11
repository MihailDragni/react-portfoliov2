import React, { useRef } from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagramSquare,
	FaTelegram,
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi'
import './contact.css'

import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_54kncgj',
      'template_5j5ja7a',
      form.current,
      'XB5IRIz-jgjSKY3Kx'
    )
    e.target.reset()
  }

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch width me. I am always open to disscusing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title"> Mail me: </span>
                <a
                  href="mailto:mihaildragnidev@gmail.com"
                  className="info__desc"
                  target="_blank"
                  rel="noreferrer"
                >
                  mihaildragnidev@gmail.com
                </a>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title"> Call me: </span>
                <a href="tel:+37379737039" className="info__desc">
                  +373 797 370 39
                </a>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://wa.me/37378120857"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              className="contact__social-link"
              href="https://m.me/mihail.dragni"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/mihaildragni"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://t.me/Macata0"
              className="contact__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        <form onSubmit={sendEmail} ref={form} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                name="name"
                type="text"
                className="form__control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                name="email"
                type="email"
                className="form__control"
                placeholder="Your Email"
              />
            </div>
            <div className="form__input-div">
              <input
                name="subject"
                type="text"
                className="form__control"
                placeholder="Your Subject"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              name="message"
              cols="30"
              rows="10"
              className="form__control textarea"
              required
            ></textarea>
          </div>

          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
