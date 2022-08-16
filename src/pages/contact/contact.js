import React, { useState as UseState, useRef as UseRef } from 'react';
import './contact.css';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import emailjs from '@emailjs/browser';
// import Envoyer from '../../assets/envoyer.png';

function contact() {
  const form = UseRef();

  const alert = UseState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_evw448a',
        'template_xw68cbd',
        form.current,
        'HKdQA-mahKXQgqtlS',
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(true);
        }, (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="corps" id='contact'>
      <form ref={form} onSubmit={sendEmail}>
        <div className="text_contact">Message</div>
        <div className="contact">
          <table cellSpacing={30} style={{ marginLeft: '80px' }}>
            <tbody>
              <tr>
                <td>
                <InputLabel style={{ marginLeft:'-180px' }}>nom</InputLabel>
                  <TextField
                    id="om"
                    type="text"
                    style={{ width: '400px', padding: '0px 20px 10px 0px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <InputLabel style={{ marginLeft:'-180px'}}>E-mail</InputLabel>
                  <TextField
                    id="e_mail"
                    type="email"
                    style={{ width: '400px', padding: '0px 20px 10px 0px' }} />
                </td>
              </tr>
              <tr>
                <td>
                  <textarea placeholder="Votre message" style={{ width: '400px', height: '150px', backgroundColor: '#F6F6F6' }} />
                </td>
              </tr>
              <tr>
                <td>
                <div>
                  <button className='btn_envoyer' style={{ marginBottom:'-10px'}}>Envoyer</button>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
      {/* <div className='btn' style={{ width: '400px', margin: 'auto' }}>
        <img src={Envoyer} alt="Votre message" />
      </div> */}
    </div>
  );
}

export default contact;
