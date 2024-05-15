import React, { useState } from 'react';
import { QuestionVF } from '../components/QuestionVF.tsx';
import { QuestionCM } from '../components/QuestionCM.jsx';
import { Link } from 'react-router-dom';

export const Environnement = () => {

    return (
        <div>
            <h1>Page Environnement</h1>

            <QuestionVF intitule="Etes vous contents du Crunch?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionCM intitule="Etes vous contents du Crunch?" reponses={[["ouiii",2],["bof",1],["non",0]]} typeQuiz="Environnement"/>

            <QuestionVF intitule="Question 1.1 : Respectez-vous les règles de souveraineté des données ?" ponderationV={3} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 1.2 : Permettez vous aux personnes concernées de visualiser les données recueillies? " ponderationV={0.5} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 1.3 : Permettez-vous aux personnes concernées de modifier leurs données personnelles ? " ponderationV={0.5} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 1.4 : Permettez-vous aux personnes concernées de supprimer leurs données personnelles ? " ponderationV={0.5} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 1.5 : Permettez-vous aux personnes concernés de refuser le traitement de leur données personnelles si celles-ci ne sont pas nécessaires ? " ponderationV={0.5} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 1.6 : Permettez vous aux personnes concernés de refuser l’utilisation de leurs données dans un objectif de profilage ? " ponderationV={0.5} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 1.7 : Prévenez-vous les personnes concernées après avoir subi une fuite de données ? " ponderationV={0.5} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 2 : Etes-vous une entreprise américaine, russe ou chinoise" ponderationV={0} ponderationF={-5} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 4 : Y a-t-il une supervision et une gestion rigoureuses des données pour en garantir l’utilisation éthique ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 5 : Votre utilisation des données pourrait-elle avoir des conséquences discriminatoires pour des groupes particuliers, même si cela n’est pas intentionnel ?" ponderationV={0} ponderationF={1} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 6 : les individus détiennent-ils la propriété de leurs données et de l’utilisation qui en est faite. Avez-vous reçu leur consentement avisé pour leur utilisation dans votre contexte spécifique ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 7 : Les données sont-elles anonymisées lorsqu’elles sont traitées ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 8 : Toutes les informations que vous avez recueillies sont-elles pertinentes, nécessaires et appropriées par rapport à votre intention déclarée ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 9 : Votre entreprise récolte-t-elle les données des utilisateurs ci-dessous sans en avoir une utilité de première nécessité ? " ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 11 : Partagez-vous les données que vous récoltez sur les utilisateurs ?  " ponderationV={0} ponderationF={1} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 12 : L’entreprise fournit-elle une politique de confidentialité claire et accessible aux utilisateurs ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 13 : L’entreprise met-elle à disposition des outils permettant aux utilisateurs de contrôler leurs données et de gérer leurs préférences de confidentialité ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 14 : Transparence par rapport à l’utilisation des données, communiquez-vous votre utilisation des données aux utilisateurs ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>
            <QuestionVF intitule="Question 15 : Communiquez-vous comment vous stockez les données aux utilisateurs ?" ponderationV={1} ponderationF={0} typeQuiz="Environnement"/>

            <button className='button-36'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></button>
        </div>
    );
}

