import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: 'John Smith',
    email: 'Jsmith01@gmail.com ',
    phone: '555-555-5555',
    message: 'Hey Jeremy, pleasure to meet you - id love to speak with you more regarding ...'
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://port-be.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userEmail: formData.email,
          reportData: {
            name: formData.name,
            phone: formData.phone,
            message: formData.message
          }
        })
      });
      const data = await response.json();
      console.log(data); // Handle response from backend
      setMessage('Email successfully sent!')
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error sending email, please try again later')
    }
  };

  return (
    <div className="contact-form">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Send me an email!</h2>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" />
        <textarea className='textbox'name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" maxLength={500} style={{height:'150px',resize:'none'}}required />
        <button type="submit">Send Message</button>
        {message && <p>{message}</p>}
      </form>
      <div className='contacts'>
        <h1>EMAIL:jdsweng@gmail.com</h1>
        <h1>PH:(518) 320-0195</h1>
        <a href='https://www.linkedin.com/in/jeremy-david-66jc/'>LinkedIn</a>
      </div>

    </div>
  );
};

export default Contact;