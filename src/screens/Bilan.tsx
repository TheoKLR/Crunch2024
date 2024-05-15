import React, { useState } from 'react';
import introMain from './Intro-bilan.png';

const TextParser = ({ text }) => {
    const lines = text.split('/');
    const parsedText = lines.map((line, index) => (
        <p key={index}>{line}</p>
    ));
    return <>{parsedText}</>;
};

export const Bilan = () => {
    const text = localStorage.getItem("bilanFinal");

        return (
            <div className='App'>
                <h1>Page Bilan</h1>
                <div className='AppContainer'>
                    <div className='personnage'>
                        <img src={introMain} alt="Personnage de présentation" id='perso'/>
                    </div>
                    <div className='AppContenu'>
                        <div className='noteGlobale' id='noteBilan'>
                            <h2>Votre moyenne générale</h2>
                            <h1>{localStorage.getItem("scoreGlobal")}/20</h1>
                        </div>
                        <div className='Rapport'>
                            <h2>Voici le rapport de la responsabilité de votre entreprise en matière de gestion des
                                données</h2><br/>
                            <div className='TexteParser'>
                                <TextParser text={text} />
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{
                    position: 'fixed',
                    top: '10px',
                    right: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <a href="/" style={{color: 'black', textDecoration: 'none'}}>
                        <img src="https://www.icone-png.com/png/54/53535.png" alt="Login" width="80" height="80"/>
                    </a>
                </div>
            </div>
        );
    }


