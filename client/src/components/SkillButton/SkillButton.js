import React from 'react';
import './SkillButton.scss';

export default function SkillButton(props) {
  return (
    <div className='skill-button'>
      {props.skill}
    </div>
  )
}
