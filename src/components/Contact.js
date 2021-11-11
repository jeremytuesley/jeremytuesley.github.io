import React from 'react';
import TextField from '@material-ui/core/TextField';

import '../assets/contact.scss';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-form-container">
        <h1 className="contact-page-title">
          Want to work together?
          <br /> Get in touch
        </h1>
        <form>
          <TextField
            id="outlined-basic"
            label="*Your Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="*Your Email"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="*Message" variant="outlined" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
