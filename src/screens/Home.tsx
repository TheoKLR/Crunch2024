import { Link } from 'react-router-dom';
import introMain from './Intro-main.png';
import badgeArgent from './argent-det.png';
import badgeOr from './or-det.png';
import badgeDiamant from './diamant-det.png';
import Emeraude from './emeraude-det.png';
import Saphir from './saphir-det.png';
import Rubis from './rubis-det.png';
import badgeInvisible from './vide-det.png';
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
    const scoreEnvironnement20 = (intScoreEnvironnement*20/16).toFixed(2);
    const scoreEthique20 = (intScoreEthique*20/30).toFixed(2);
    const scoreSecurite20 = (intScoreSecurite*20/28).toFixed(2);
    const scoreGlobal = (parseInt(scoreSecurite20) + parseInt(scoreEthique20) + parseInt(scoreEnvironnement20)) / 3;

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
                        {scoreGlobal < 16 && <img src={badgeInvisible} alt="badge" />}
                        {scoreGlobal >= 16 && scoreGlobal < 18 && <img src={badgeArgent} alt="badge" />}
                        {scoreGlobal >= 18 && scoreGlobal < 20 && <img src={badgeOr} alt="badge" />}
                        {scoreGlobal >= 20 && <img src={badgeDiamant} alt="badge" />}
                    </div>
                    <nav>
                        <div className='categorie'>
                            <button className="button-36"><Link to="/environnement" style={{ color: 'white', textDecoration: 'none' }}>Environnement</Link></button>
                            <h2>{scoreEnvironnement20}/20</h2>
                            {parseInt(scoreEnvironnement20) < 16 && <img src={badgeInvisible} alt="badge" />}
                            {parseInt(scoreEnvironnement20) >= 16 && <img src={Emeraude} alt="badge" />}
                        </div>
                        <div className="categorie">
                            <button className="button-36"><Link to="/securite" style={{ color: 'white', textDecoration: 'none' }}>Sécurité</Link></button>
                            <h2>{scoreSecurite20}/20</h2>
                            {parseInt(scoreSecurite20) <16 && <img src={badgeInvisible} alt="badge" />}
                            {parseInt(scoreSecurite20) >= 16 && <img src={Rubis} alt="badge" />}
                        </div>
                        <div className='categorie'>
                            <button className="button-36"><Link to="/ethique" style={{ color: 'white', textDecoration: 'none' }}>Ethique</Link></button>
                            <h2>{scoreEthique20}/20</h2>
                            {parseInt(scoreEthique20) < 16 && <img src={badgeInvisible} alt="badge" />}
                            {parseInt(scoreEthique20) >= 16 && <img src={Saphir} alt="badge" />}
                        </div>
                    </nav>
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
                <a href="/Bilan" style={{color: 'black', textDecoration: 'none'}}><img src="https://www.icone-png.com/png/2/1552.png" alt="Login" width="80" height="80"/>
                </a>
            </div>
        </div>
    );
};
