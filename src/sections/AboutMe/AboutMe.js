import React from 'react';
import myself from '../../assets/benattou.jpeg';
import './AboutMe.scss';


export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className='container'>
        <div className='myself'>
            <img src={myself} alt="myself" />
        </div>
        <div className='desc'>
            <h2>À PROPOS DE MOI</h2>
            <p>
                Je suis un développeur fullstack passionné, spécialisé dans les technologies JavaScript, React et Node.js.<br /><br /> 
                Mon parcours atypique d'autodidacte m'a conduit à explorer et à maîtriser ces technologies, et j'ai consolidé mon savoir-faire grâce à de multiples formations et à des expériences enrichissantes dans des projets web divers.<br /><br/>
                Mon approche du développement web est holistique, car je suis capable de mener un projet de bout en bout, de la conception à la mise en ligne. Mon expertise ne se limite pas uniquement au code, mais s'étend également au référencement, à l'optimisation des performances et à l'expérience utilisateur.<br /><br/>
                Je suis un développeur créatif, soucieux du détail, et je crois fermement que chaque ligne de code et chaque élément de design contribuent à la réussite d'un projet.
            </p>
            <div className='links'>
              <span className='hire-me'>Me contacter </span>
              <span>—</span>
              <span className='more-about-me'> En savoir plus</span>
            </div>
        </div>
      </div>
    </div>
  )
}
