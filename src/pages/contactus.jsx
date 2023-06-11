import React from 'react';
import  "../assets/css/contactus.css";
function ContactUs() {

  return (
    <>
      <h3 className='p-3 text-center '>Contact Agricreations</h3>
      <div className="contact container w-100 text-center">
      <iframe title="Contact Form" src="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/92a47a35-a437-4df8-aa96-65c4ec7b2f24" referrerpolicy="origin" sandbox="allow-forms allow-popups allow-scripts" width="100%" height="600px" frameborder="0"></iframe>
      </div>
    </>
  );
}

export default ContactUs;