import * as React from 'react';
import { useEffect } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './BasicTimeline.scss';

export default function BasicTimeline(props) {

    useEffect(() => {

        console.log(props.handleSelected);
    })

    return (
        <>
            <div style={{ display: props.handleSelected && "none"}}>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot className='TimelineDot' />
                        <TimelineConnector className='TimelineDot' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='xp'>
                                <span className='date'>2023</span>
                                <span className="diplome">Intégrateur web (Bac +2)</span>
                                <span className='corp'>Open Classrooms</span>
                                <span className='program'>
                                    Compétences : JavaScript · HTML5 ·
                                    CSS · Sass · React.js · Node.js · Git ·
                                    API REST · JSON · SEO
                                </span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot className='TimelineDot' />
                        <TimelineConnector className='TimelineDot' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='xp'>
                                <span className='date'>2018 - 2020</span>
                                <span className="diplome">Développeur web - Intégrateur web</span>
                                <span className='corp'>Web @cadémie by Epitech</span>
                                <span className='program'>
                                    Compétences : PHP · JavaScript ·
                                    MySQL · HTML5 · CSS · Sass · Git ·
                                    React.js · Node.js · Express.js ·
                                    Symfony · Laravel · React Native ·
                                    Bootstrap · MongoDB · Méthodes
                                    agiles · Scrum
                                </span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <div style={{ display: !props.handleSelected && "none"}}>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot className='TimelineDot' />
                        <TimelineConnector className='TimelineDot' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='xp'>
                                <span className='date'>2019</span>
                                <span className="diplome">Développeur web front-end</span>
                                <span className='corp'>Sayse</span><br />
                                <span className='program'>
                                    Développement d'une interface en React.js
                                    permettant de paramétrer des boîtiers SD-
                                    WAN. <br /><br />
                                    Utilisation de la méthode agile, de l’API
                                    Google Maps, bibliothèques React, et
                                    systèmes graphiques.
                                </span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot className='TimelineDot' />
                        <TimelineConnector className='TimelineDot' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='xp'>
                                <span className='date'>2023</span>
                                <span className="diplome">Projet web</span>
                                <span className='corp'>Kasa</span><br />
                                <span className='program'>
                                    Création d'une application one page de
                                    location immobilière avec React et Sass.<br />
                                    - Utilisation de React Hook<br />
                                    - Mise en place d'un router<br />
                                    - Gestion des props<br />
                                    - Gestion de données json<br />
                                    - Responsive design<br />
                                    - Création d'un slideshow<br />
                                    - Création de composants (navbar, footer, collapse, rating...)
                                </span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot className='TimelineDot' />
                        <TimelineConnector className='TimelineDot' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='xp'>
                                <span className='date'>2023</span>
                                <span className="diplome">Projet web</span>
                                <span className='corp'>Argent Bank</span><br />
                                <span className='program'>
                                    Développement d'un site de banque en ligne avec React et Redux.<br /><br />
                                    - Intégration des maquettes<br />
                                    - Gérer le routage avec React Router<br />
                                    - Création des composants<br />
                                    - Mise en place du state global avec Redux<br />
                                    - Gérer la connexion utilisateur avec l'API<br />
                                    - Gérer la modification du nom d'utilisateur<br />
                                    - Analyser les besoins du sites et lister les endpoints nécessaires au bon fonctionnement<br />
                                    - Ecrire les endpoints dans le fichier Swagger.yaml<br />
                                </span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                        <TimelineDot className='TimelineDot' />
                        <TimelineConnector className='TimelineDot' />
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className='xp'>
                                <span className='date'>2023</span>
                                <span className="diplome">Projet web</span>
                                <span className='corp'>77Events</span><br />
                                <span className='program'>
                                Débogage d'un site d’événementiel en React.js.<br/><br/>
                                - Usage de React Developer Tools<br/>
                                - Correction de bugs (carrousel, filtre par catégorie, formulaire, affichage la dernière prestation dans le footer...)<br/>
                                - Rédaction du cahier de recette avec les scénarios permettant le bon fonctionnement du site<br/>
                                - S'assurer qu'aucun test unitaire ne fail<br/>
                                - Ajouter des tests unitaires
                                </span>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </>
    );
}
