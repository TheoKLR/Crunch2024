import React, { useState } from 'react';
import { QuestionVF } from '../components/QuestionVF.tsx';
import { QuestionCM } from '../components/QuestionCM.jsx';
import { Link } from 'react-router-dom';

export const Environnement = () => {

    return (
        <div>
            <h1>Page Environnement</h1>

            <QuestionVF intitule="Question 1 : Votre stockage est-il suréquipé ? (c’est-à-dire fait-il preuve de haute performance sans justification, et donc de consommation inutile de matériaux rares ?)" ponderationV={0} ponderationF={2} typeQuiz="Environnement" texteReponse="Privilégier l’utilisation de matériel adapté à l’utilisation. Du matériel qui n’est pas suréquipé est non seulement meilleur pour l’environnement mais également plus économique pour l’entreprise."/>
            <QuestionCM intitule="Question 2 : Quel système de refroidissement utilisez-vous ? (plusieurs choix possibles, points : prendre le minimum des différentes réponses choisies)" reponses={[["par ventilation simple",0],["par watercooling",1],["par couloir froid",3],["par free cooling",3],["par bains de liquides diélectriques",2]]} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 3 : Avez-vous un système de réutilisation de la chaleur produite ?" ponderationV={2} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 4 : Désactivez-vous des fonctionnalités de votre système de stockage lorsque non utilisées à des fins d’économie d’énergie ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 5 : La construction de votre système de stockage a-t-il impliqué la destruction d’écosystèmes ?" ponderationV={0} ponderationF={2} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 6 : Avez-vous un système de gestion des déchets et de recyclage ?" ponderationV={2} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 7 : Votre système de stockage possède-t-il des technologies peu consommatrices ?" ponderationV={2} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 8 : Avez-vous recours à l’IA à des fins d'optimisation énergétique ?" ponderationV={2} ponderationF={0} typeQuiz="Environnement"/>
            
            <button className='button-36'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></button>
        </div>
    );
}

