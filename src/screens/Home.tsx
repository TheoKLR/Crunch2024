import { Link } from 'react-router-dom';
import introMain from './Intro-main.png';
import React from 'react';

export const Home = () => {

    const scoreEnvironnement = localStorage.getItem("scoreEnvironnement");
    const scoreEthique = localStorage.getItem("scoreEthique");
    const scoreSecurite = localStorage.getItem("scoreSecurite");

    // Convertir les scores en nombres entiers ou utiliser une valeur par défaut de 0 si null
    const intScoreEnvironnement = scoreEnvironnement ? parseInt(scoreEnvironnement) : 0;
    const intScoreEthique = scoreEthique ? parseInt(scoreEthique) : 0;
    const intScoreSecurite = scoreSecurite ? parseInt(scoreSecurite) : 0;

    // Calculer le score global
    const scoreGlobal = (intScoreEnvironnement + intScoreEthique + intScoreSecurite) / 3;

    // Stocker le score global dans localStorage
    localStorage.setItem("scoreGlobal", String(scoreGlobal));
    const stringScoreGlobal = localStorage.getItem("scoreGlobal")
    const displayScore = stringScoreGlobal ? stringScoreGlobal.substring(0, 4) : "0.00";
    

    return (
        <div className="App">
            <h1>Estimateur de Responsabilité des Données pour les Entreprises</h1>
            <div className='AppContainer'>
                <div className='personnage'>
                    <img src={introMain} alt="Personnage de présentation" id='perso' />
                </div>
                <div className='AppContenu'>
                    <div className='noteGlobale'>
                        <h2>Votre moyenne générale</h2>
                        <h1>{displayScore}/20</h1>
                    </div>
                    <nav>
                        <div className='categorie'>
                            <button className="button-36"><Link to="/environnement" style={{ color: 'white', textDecoration: 'none' }}>Environnement</Link></button>
                            <h2>{localStorage.getItem("scoreEnvironnement")}/20</h2>
                        </div>
                        <div className="categorie">
                            <button className="button-36"><Link to="/securite" style={{ color: 'white', textDecoration: 'none' }}>Sécurité</Link></button>
                            <h2>{localStorage.getItem("scoreSecurite")}/20</h2>
                        </div>
                        <div className='categorie'>
                            <button className="button-36"><Link to="/ethique" style={{ color: 'white', textDecoration: 'none' }}>Ethique</Link></button>
                            <h2>{localStorage.getItem("scoreEthique")}/20</h2>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
