import React, { useState } from 'react';
import './Question.css';

export const QuestionCM = (props) => {
    const { intitule, reponses, typeQuiz } = props;
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const handleCheckboxChange = (event, index) => {
        const updatedSelectedAnswers = [...selectedAnswers];
        if (event.target.checked) {
            updatedSelectedAnswers.push(index);
        } else {
            const answerIndex = updatedSelectedAnswers.indexOf(index);
            if (answerIndex > -1) {
                updatedSelectedAnswers.splice(answerIndex, 1);
            }
        }
        setSelectedAnswers(updatedSelectedAnswers);
    };

    const handleSubmit = () => {
        let totalScore = 0;
        selectedAnswers.forEach(index => {
            totalScore += reponses[index][1];
        });

        if (typeQuiz === "Ethique"){
            const scoreEthique = localStorage.getItem("scoreEthique");
            const intScoreEthique = scoreEthique ? parseInt(scoreEthique) : 0;
            const intNewScoreEthique = intScoreEthique + totalScore;
            localStorage.setItem("scoreEthique", ""+intNewScoreEthique)
         } else if (typeQuiz === "Environnement"){
             const scoreEnvironnement = localStorage.getItem("scoreEnvironnement");
             const intScoreEnvironnement = scoreEnvironnement ? parseInt(scoreEnvironnement) : 0;
             const intNewScoreEnvironnement = intScoreEnvironnement + totalScore;
             localStorage.setItem("scoreEnvironnement", ""+intNewScoreEnvironnement)
         } else {
             const scoreSecurite = localStorage.getItem("scoreSecurite");
             const intScoreSecurite = scoreSecurite ? parseInt(scoreSecurite) : 0;
             const intNewScoreSecurite = intScoreSecurite + totalScore;
             localStorage.setItem("scoreSecurite", ""+intNewScoreSecurite)
         }
    };

    return (
        <div className='container'>
            <div className='intitule'>
                <h2 id='intitule'>{intitule}</h2>
                <hr />
            </div>
            <div className='contenu'>
                {reponses.map((reponse, index) => (
                    <div key={index} className='checkbox-container'>
                        <label>
                            <input
                                type='checkbox'
                                value={reponse[1]}
                                onChange={(event) => handleCheckboxChange(event, index)}
                            />
                            {reponse[0]}
                        </label>
                    </div>
                ))}
                <button className='button-36' id='boutonCM' onClick={handleSubmit}>Valider</button>
            </div>
        </div>
    );
}
