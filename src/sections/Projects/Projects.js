import React from 'react';
import BoxProject from '../../components/BoxProject/BoxProject';
import './Projects.scss';

export default function Projects() {
  return (
    <div className='my-projects'>
        <span>— DÉCOUVREZ-EN DAVANTAGE</span>
        <h2>Mes Projets</h2>
        <div className='projects'>
          <BoxProject git="https://github.com/NassimBenattou/ArgentBank_ReactRedux" title="Argent Bank" desc="Développement d'un site de banque en ligne" technos="REACT REDUX EXPRESS SASS" />
          <BoxProject git="https://github.com/NassimBenattou/Kasa_Private-Rental_ReactJS" title="Kasa - Private Rental" desc="Création d'une application one page de location immobilière" technos="REACT SASS" />
          <BoxProject git="https://github.com/NassimBenattou/77events-React" title="77Events" desc="Débogage d'un site d’événementiel"  technos="REACT JEST SASS" />
          <BoxProject git="https://github.com/NassimBenattou/NinaCarducci_SEO" title="Nina Carducci SEO" desc="Optimisation du SEO d'un portfolio de photographe" technos="JAVASCRIPT JQUERY SEO HTML CSS" />
          <BoxProject git="https://github.com/NassimBenattou/OhMyFood" website="https://nassimbenattou.github.io/OhMyFood/" desc="Maquette d'un site de livraison de nourriture à domicile" title="OhMyFood" technos="HTML SASS" />
          <BoxProject git="https://github.com/NassimBenattou/Booki" website="https://nassimbenattou.github.io/Booki/" title="Booki" desc="Maquette d'un site de réservation de voyage" technos="HTML CSS" />
        </div>
    </div>
  )
}
