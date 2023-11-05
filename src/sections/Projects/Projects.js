import React from 'react';
import BoxProject from '../../components/BoxProject/BoxProject';
import './Projects.scss';

export default function Projects() {
  return (
    <div className='my-projects'>
        <span>— DÉCOUVREZ-EN DAVANTAGE</span>
        <h2>Mes Projets</h2>
        <div className='projects'>
          <BoxProject git="https://github.com/NassimBenattou/ArgentBank_ReactRedux" title="Argent Bank" technos="REACT REDUX EXPRESS SASS" />
          <BoxProject git="https://github.com/NassimBenattou/Kasa_Private-Rental_ReactJS" title="Kasa - Private Rental" technos="REACT SASS" />
          <BoxProject git="https://github.com/NassimBenattou/77events-React" title="77Events" technos="REACT JEST SASS" />
          <BoxProject git="https://github.com/NassimBenattou/NinaCarducci_SEO" title="Nina Carducci SEO" technos="JAVASCRIPT JQUERY SEO HTML CSS" />
          <BoxProject git="https://github.com/NassimBenattou/OhMyFood" website="https://nassimbenattou.github.io/OhMyFood/" title="OhMyFood" technos="HTML SASS" />
          <BoxProject git="https://github.com/NassimBenattou/Booki" website="https://nassimbenattou.github.io/Booki/" title="Booki" technos="HTML CSS" />
        </div>
    </div>
  )
}
