import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import './Services.scss';

export default function Services() {
  return (
    <div className='services'>
        <h2>MES SERVICES</h2>
        <div className='infos'>
          <div className='dev'>
            <FontAwesomeIcon className='icon' icon={faCode} />
            <h3>Dévelopement Fullstack</h3>
            <p>Je crée des sites web réactifs et conviviaux en utilisant des technologies et des frameworks de développement web modernes tels que React, Express.js et Redux.</p>
          </div>
          <div className='doc'>
            <FontAwesomeIcon className='icon' icon={faBookOpen} />
            <h3>Documentation Technique</h3>
            <p>
            Mon expertise réside dans la création de documents techniques clairs et concis, tels que des manuels d'utilisation, des guides d'aide et des documents sur les API, qui simplifient des idées complexes, forment vos utilisateurs et améliorent votre produit.
            </p>
          </div>
        </div>
    </div>
  )
}
