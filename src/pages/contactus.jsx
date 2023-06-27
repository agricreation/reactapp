import React from 'react';
import  "../assets/css/contactus.css";
// import Contact from '../comp/contactus';
function ContactUs() {

  return (
    <>
    <a href="https://contact.agricreations.com">
      <h3 className='p-3 text-center '>Contact Agricreations</h3></a>
      <div className="contact container w-100 text-center">
      <iframe title="Contact Form" src="https://www.contact.agricreations.com/" referrerpolicy="origin" sandbox="allow-forms allow-popups allow-scripts" width="100%" height="600px" frameborder="0"></iframe>
      {/* <Contact /> */}
      </div>
    </>
  );
}

export default ContactUs;