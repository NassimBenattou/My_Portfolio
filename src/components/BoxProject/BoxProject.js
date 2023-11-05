import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './BoxProject.scss';

export default function BoxProject(props) {
  return (
    <div className='box-project'>
        <div className='redirect'>
          <a href={props.git} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className='open' />
          </a>
          <a href={props.website} target="_blank" rel="noopener noreferrer">
            <OpenInNewIcon className='open' />
          </a>
        </div>
        <h4>{props.title}</h4>
        <div className='technos'>
            <span>{props.technos}</span>
        </div>
    </div>
  )
}
