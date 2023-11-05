import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <div className='contact'>
        <span>- CONTACTEZ MOI</span>
        <h2><span>🚀</span>  N'hésitez pas</h2>
        <div className='form'>
            <p>Vous avez une question, une proposition, un projet ou souhaitez collaborer sur un projet ?<br /> N'hésitez pas à me contacter.</p>
            <form className='fields'>
                <div className='name-email'>
                    <div className='infos'>
                        <label for="name">Votre Nom</label>
                        <input type="text" name="name" id='name' placeholder='Entrez votre nom' autocomplete="off" required/>
                    </div>
                    <div className='infos'>
                        <label for="name">Votre E-Mail</label>
                        <input type="email" name="email" id='email' placeholder='Entrez votre adresse mail' autocomplete="off" required/>
                    </div>
                </div>
                <div className='message'>
                    <label for="message">Votre Message</label>
                    <textarea name="message" id='message' placeholder='Entrez votre message' autocomplete="off" required></textarea>
                </div>
                <button>Envoyer un Message.</button>
            </form>
        </div>
    </div>
  )
}
