import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Contact.scss';

export default function Contact() {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/envoyer-email', { name, email, message })
      .then((response) => {

        console.log(response)
        alert('E-mail envoyé avec succès');
      })
      .catch((error) => {
        alert('Échec de l\'envoi de l\'e-mail');
      });
  };


  return (
    <div className='contact'>
        <span>- CONTACTEZ MOI</span>
        <h2><span role="img" aria-label="fusée">🚀</span>  N'hésitez pas</h2>
        <div className='form'>
            <p>Vous avez une question, une proposition, un projet ou souhaitez collaborer sur un projet ?<br /> N'hésitez pas à me contacter.</p>
            <form className='fields' onSubmit={handleSubmit}>
                <div className='name-email'>
                    <div className='infos'>
                        <label htmlFor="name">Votre Nom</label>
                        <input type="text" name="name" id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Entrez votre nom' autoComplete="off" required/>
                    </div>
                    <div className='infos'>
                        <label htmlFor="name">Votre E-Mail</label>
                        <input type="email" name="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Entrez votre adresse mail' autoComplete="off" required/>
                    </div>
                </div>
                <div className='message'>
                    <label htmlFor="message">Votre Message</label>
                    <textarea name="message" id='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Entrez votre message' autoComplete="off" required></textarea>
                </div>
                <button type="submit">Envoyer un Message.</button>
            </form>
        </div>
    </div>
  )
}
