import React , { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const d = new Date();

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_q2bk20h', 'template_dbcj999', form.current, 'kB7EZ-owfOBCyBZzL')
        .then((result) => {
            console.log(result.text);
            alert('Thank you very much for your feedback! I will reply to the email as soon as I read it...');
        }, (error) => {
            console.log(error.text);
            alert('Thank you very much for your feedback! Message has not been sent, please try again...');
        });
        e.target.reset();
    };

    return (
        <section className="contact">
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>

            <div className='contact-container'>
                <div className="contact__options">
                    <article className="contact__option">
                        <i className="fa-solid fa-envelope contact__option--icon"></i>
                        <h4>Email</h4>
                        <h5>haupk2003@gmail.com</h5>
                        <a href="mailto:haupk2003@gmail.com">Send a email</a>
                    </article>
                    <article className="contact__option">
                        <i className="fa-brands fa-facebook-messenger contact__option--icon"></i>
                        <h4>Message</h4>
                        <h5>PhanTrongHau</h5>
                        <a href="https://m.me/Phantronghau.bommm" target='_blank' rel='noopener noreferrer'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <i className="fa-solid fa-phone contact__option--icon"></i>
                        <h4>Phone</h4>
                        <h5>+123456789</h5>
                        <a href="tel://84392334214">Call me now</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn'>Send Message</button>
                </form>
            </div>
            <footer>
                <div>
                    PhanTrongHau © {d.getFullYear()}
                </div>
            </footer>

        </section>

    );
};

export default Contact;