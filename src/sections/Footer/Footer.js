import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
            <h5>DISCUTONS !</h5>
            <a href="https://www.linkedin.com/in/nassimbenattou" target="_blank" rel="noopener noreferrer">
              linkedin.com/nassimbenattou
            </a>
            <a href="https://github.com/NassimBenattou" target="_blank" rel="noopener noreferrer">
              github.com/NassimBenattou
            </a>
        </div>
        <div className='copyright'>
          <p>© Nassim Benattou 2023</p>
        </div>
    </div>
  )
}
