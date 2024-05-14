import React from 'react';
import { Link } from 'react-router-dom';
import introMain from './Intro-main.png';

export const Home = () => {
    return (
        <div className="App">
            <h1>Estimateur de Responsabilité des Données pour les Entreprises</h1>
            <div className='AppContainer'>
                <div className='personnage'>
                    <img src={introMain} alt="Personnage de présentation" id='perso'/>
                </div>
                <div className='AppContenu'>
                    <div className='noteGlobale'>
                        <h2>Votre moyenne générale</h2>
                        <h1>0/20</h1>
                    </div>
                    <nav>
                        <div className='categorie'>
                            <button className="button-36"><Link to="/environnement" style={{ color: 'white', textDecoration: 'none' }}>Environnement</Link></button>
                            <h2>0/20</h2>
                        </div>
                        <div className="categorie">
                            <button className="button-36"><Link to="/securite" style={{ color: 'white', textDecoration: 'none' }}>Sécurité</Link></button>
                            <h2>0/20</h2>
                        </div>
                        <div className='categorie'>
                            <button className="button-36"><Link to="/ethique" style={{ color: 'white', textDecoration: 'none' }}>Ethique</Link></button>
                            <h2>0/20</h2>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
