import React, { useState } from 'react';
import './Question.css';

export const QuestionCM = (props) => {
    const { intitule, reponses, typeQuiz, texteReponse } = props;

    const [buttonClicked, setButtonClicked] = useState(false); 
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

        const score = localStorage.getItem("score"+typeQuiz);
        const intScore = score ? parseInt(score) : 0;
        const intNewScore = intScore + totalScore;
        localStorage.setItem("score"+typeQuiz, ""+intNewScore)

        if (totalScore <=0 ){ //rajout
            const bilanFinal = localStorage.getItem("bilanFinal");
            const newBilanFinal = bilanFinal ? bilanFinal + "/" + texteReponse : texteReponse;
            localStorage.setItem("bilanFinal", newBilanFinal);
        }

        setButtonClicked(true); 
    };

    if (buttonClicked) {
        return null;
    }

    return (
        <div className="container">
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
