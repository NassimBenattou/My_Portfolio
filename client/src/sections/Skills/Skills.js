import React from 'react';
import { useState } from 'react';
import SkillButton from '../../components/SkillButton/SkillButton';
import BasicTimeline from '../../components/BasicTimeline/BasicTimeline';
import './Skills.scss';

export default function Skills() {

    const [selected, setSelected] = useState(true);

    const changeSelected = () => {

        setSelected(!selected);

        console.log(selected);
    }

    return (
    <div className='skills'>
        <div className='title'>
            <h2>NASSIM <span>BENATTOU </span> .</h2>
        </div>
        <div className='desc'>
            <p>
                Développeur Web Fullstack basé à Montpellier, je me concentre sur la conception d'interfaces utilisateur engageantes, la création d'expériences interactives et la mise en vie de produits à travers le design et la technologie.<br /><br />

                J'ai toujours soutenu l'idée d'une approche minimaliste et axée sur l'utilisateur en matière de conception et de développement, que j'adopte lorsque je conçois et développe des applications web entièrement adaptées.<br /><br />

                Dans mon temps libre, j'aime écouter et créer des compositions musicales, je m'intéresse aussi aux nouvelles technologies comme la blockain ou les IA...
            </p>
        </div>
        <div className='techno'>
            <SkillButton skill="JavaScript" />
            <SkillButton skill="React.js" />
            <SkillButton skill="Redux" />
            <SkillButton skill="Node.js" />
            <SkillButton skill="Express.js" />
            <SkillButton skill="MySQL" />
            <SkillButton skill="HTML5" />
            <SkillButton skill="CSS3" />
            <SkillButton skill="Sass" />
            <SkillButton skill="Material UI" />
            <SkillButton skill="AntDesign" />
            <SkillButton skill="PHP" />
            <SkillButton skill="Git | Github" />
        </div>
        <div className='timeline'>
            <div className='nav-xp'>
                <div onClick={changeSelected} style={{ borderBottom: selected && "1px solid #864BA2", opacity: !selected && "0.5"}}>
                    Expériences
                </div>
                <div onClick={changeSelected} style={{ borderBottom: !selected && "1px solid #864BA2", opacity: selected && "0.5"}}>
                    Formations
                </div>
            </div>
            <BasicTimeline handleSelected={selected} className="basic-timeline" />
        </div>
    </div>
    )
}
