import React from 'react';
import './Question.css';

export const QuestionVF = (props) => {

    const { intitule, ponderationV, ponderationF, typeQuiz } = props;

    const handleSubmitV = () => {
        if (typeQuiz === "Ethique"){
           const scoreEthique = localStorage.getItem("scoreEthique");
           const intScoreEthique = scoreEthique ? parseInt(scoreEthique) : 0;
           const intNewScoreEthique = intScoreEthique + ponderationV;
           localStorage.setItem("scoreEthique", ""+intNewScoreEthique)
        } else if (typeQuiz === "Environnement"){
            const scoreEnvironnement = localStorage.getItem("scoreEnvironnement");
            const intScoreEnvironnement = scoreEnvironnement ? parseInt(scoreEnvironnement) : 0;
            const intNewScoreEnvironnement = intScoreEnvironnement + ponderationV;
            localStorage.setItem("scoreEnvironnement", ""+intNewScoreEnvironnement)
        } else {
            const scoreSecurite = localStorage.getItem("scoreSecurite");
            const intScoreSecurite = scoreSecurite ? parseInt(scoreSecurite) : 0;
            const intNewScoreSecurite = intScoreSecurite + ponderationV;
            localStorage.setItem("scoreSecurite", ""+intNewScoreSecurite)
        }
    }

    const handleSubmitF = () => {
        if (typeQuiz === "Ethique"){
            const scoreEthique = localStorage.getItem("scoreEthique");
            const intScoreEthique = scoreEthique ? parseInt(scoreEthique) : 0;
            const intNewScoreEthique = intScoreEthique + ponderationF;
            localStorage.setItem("scoreEthique", ""+intNewScoreEthique)
         } else if (typeQuiz === "Environnement"){
             const scoreEnvironnement = localStorage.getItem("scoreEnvironnement");
             const intScoreEnvironnement = scoreEnvironnement ? parseInt(scoreEnvironnement) : 0;
             const intNewScoreEnvironnement = intScoreEnvironnement + ponderationF;
             localStorage.setItem("scoreEnvironnement", ""+intNewScoreEnvironnement)
         } else {
             const scoreSecurite = localStorage.getItem("scoreSecurite");
             const intScoreSecurite = scoreSecurite ? parseInt(scoreSecurite) : 0;
             const intNewScoreSecurite = intScoreSecurite + ponderationF;
             localStorage.setItem("scoreSecurite", ""+intNewScoreSecurite)
         }
    }

    return (
        <div className='container'>
            <div className='intitule'>
                <h2 id='intitule'>{intitule}</h2>
                <hr />
            </div>
            <div className='contenu'>
               <button className='button-36' id='boutonVF' onClick={handleSubmitV}>Oui</button>
               <button className='button-36' id='boutonVF' onClick={handleSubmitF}>Non</button>
            </div>
        </div>      
    );
}

