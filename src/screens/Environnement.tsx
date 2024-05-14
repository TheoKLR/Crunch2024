import React, { useState } from 'react';
import { QuestionVF } from '../components/QuestionVF.tsx';
import { Link } from 'react-router-dom';

export const Environnement = () => {

    return (
        <div>
            <h1>Page Environnement</h1>
            <QuestionVF intitule="Etes vous contents du Crunch?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <button className='button-36'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></button>
        </div>
    );
}

