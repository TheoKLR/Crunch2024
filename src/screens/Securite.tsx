import React, { useState } from 'react';
import { QuestionVF } from '../components/QuestionVF.tsx';
import { QuestionCM } from '../components/QuestionCM.jsx';
import { Link } from 'react-router-dom';

export const Securite = () => {
    return (
        <div>
            <h1>Page Sécurité</h1>
            <QuestionVF intitule="Un plan de réponse aux incidents est-il en place en cas de cyberattaque ?" ponderationV={1} ponderationF={0} typeQuiz="Securite"/>
            <button className='button-36'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></button>

            <QuestionVF intitule="Les applications sont-elles régulièrement mises à jour avec les derniers correctifs de sécurité ?" ponderationV={1} ponderationF={-1} typeQuiz="Securite"/>
            <button className='button-36'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></button>

            <QuestionVF intitule="Des audits de conformité aux réglementations en vigueur sur la protection des données sont-ils effectués régulièrement ?" ponderationV={2} ponderationF={0} typeQuiz="Securite"/>
            <button className='button-36'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></button>
        </div>
    );
}

