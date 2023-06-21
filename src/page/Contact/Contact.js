import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_ezvjmii',
        'template_9rlqo5n',
        form.current,
        'ycRGcqWUeQ5dMytN2'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div>
      <div className='contact'>
        <div className='contact-info'>
          <div className='contact-skills'>
            <h1 className='text-2xl font-medium'>
              <span className='text-blue-700 mr-2'>I AM WITH YOU</span>FEEL FREE
              TO QUESTION
            </h1>
            <hr />
            <p className='pt-4 text-white'>
              Feel free to get in touch with me. <br /> I am always open to
              discussing new projects, <br /> creative ideas or opportunities to
              be part of your visions.
            </p>
          </div>
          <h1 className='font-medium text-2xl mt-4'>CONTACT INFO</h1>
          <div className='sty-connect'>
            <FaEnvelope className='contact-icon'></FaEnvelope>
            <div>
              <p>MAIL ME</p>
              <p>istiak1439@gmail.com</p>
            </div>
          </div>
          <div className='sty-connect'>
            <FaPhone className='contact-icon'></FaPhone>
            <div>
              <p>CONTACT ME</p>
              <p>+880-1796481649</p>
              <p>+880-1741958579</p>
            </div>
          </div>
          <div className='sty-connect'>
            <FaLocationArrow className='contact-icon'></FaLocationArrow>
            <div>
              <p>LOCATION</p>
              <p>
                Lalmatia Block-E,
                <br />
                Mhommadpur,Dhaka
              </p>
            </div>
          </div>
        </div>
        <div className='mail-box2'>
          <div className='contact-skills'>
            <h1 className='text-2xl font-medium'>
              <span className='text-blue-700 mr-2'>LEFT AN</span> EMAIL
            </h1>
            <hr />
          </div>
          <div className='mail-box'>
            <form ref={form} onSubmit={sendEmail} className='input-section'>
              <div>
                <input
                  type='text'
                  name='user_name'
                  placeholder='Your Name'
                  required
                />
              </div>
              <div>
                <input
                  type='email'
                  name='user_email'
                  placeholder='Your Email'
                  required
                />
              </div>
              <div>
                <input
                  type='text'
                  name='message'
                  placeholder='Your Subject'
                  required
                />
              </div>
              <div>
                <textarea
                  name='textarea'
                  id=''
                  cols='30'
                  rows='10'
                  placeholder='Your Message'
                  required
                ></textarea>
              </div>
              <div>
                <input
                  type='submit'
                  className='btn-sendMessage'
                  value='Send Message'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
