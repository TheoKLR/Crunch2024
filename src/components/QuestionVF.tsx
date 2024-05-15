import React, { useEffect, useState } from 'react';
import './Question.css';

export const QuestionVF = (props) => {

    const { intitule, ponderationV, ponderationF, typeQuiz, texteReponse } = props;

    const [buttonClicked, setButtonClicked] = useState(false); 

    const handleSubmitV = () => {
        const score = localStorage.getItem("score"+typeQuiz);
        const intScore = score ? parseInt(score) : 0;
        const intNewScore = intScore + ponderationV;
        localStorage.setItem("score"+typeQuiz, ""+intNewScore)

        if (ponderationV <=0 ){ //rajout
            const bilanFinal = localStorage.getItem("bilanFinal");
            const newBilanFinal = bilanFinal ? bilanFinal + "/" + texteReponse : texteReponse;
            localStorage.setItem("bilanFinal", newBilanFinal);
        }

        setButtonClicked(true); 
    }

    const handleSubmitF = () => {
        const score = localStorage.getItem("score"+typeQuiz);
        const intScore = score ? parseInt(score) : 0;
        const intNewScore = intScore + ponderationF;
        localStorage.setItem("score"+typeQuiz, ""+intNewScore)

        if (ponderationF <=0 ){ //rajout
            const bilanFinal = localStorage.getItem("bilanFinal");
            const newBilanFinal = bilanFinal ? bilanFinal + "/" + texteReponse : texteReponse;
            localStorage.setItem("bilanFinal", newBilanFinal);
        }

        setButtonClicked(true); 
    }
    
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
               <button className='button-36' id='boutonVF' onClick={handleSubmitV}>Oui</button>
               <button className='button-36' id='boutonVF' onClick={handleSubmitF}>Non</button>
            </div>
        </div>      
    );
}


