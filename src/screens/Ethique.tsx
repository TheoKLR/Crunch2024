import React, { useState } from 'react';
import { QuestionVF } from '../components/QuestionVF.tsx';
import { QuestionCM } from '../components/QuestionCM.jsx';
import { Link } from 'react-router-dom';

export const Ethique = () => {

    localStorage.setItem("indexQuestionEthique","0");

    return (
        <div>
            <QuestionVF intitule="Respectez-vous la loi RGPD (Règlement Général sur la Protection des Données)" ponderationV={10} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionCM intitule="Dans ce cas, lesquelles de ces lois respectez-vous ?" reponses={[["ADPPA (American Data and Privacy Protection Act)",2],["ePrivacy Directive (Privacy and Electronic Communications Directive)",2],["CDPA (Connecticut Data Privacy Act)",2],["CCPA (California Consumer Privacy Act)",7],["CPRA (California Privacy Rights Act)",2],["VCDPA (Virginia Consumer Data Privacy Act)",2],["UCPA (Utah Consumer Privacy Act)",2],["APP (Australian Privacy Principles)",2],["Act on Protection of Personal Information (APPI)",2],["PIPEDA (Personal Information Protection and Electronic Documents Act)",2],["Bill C-27 (Digital Charter Implementation Act)",2],["PIPL (Personal Information Protection Law)",2],["LGPD (General Data Protection Law)",2],["POPIA (Protection of Personal Information Act)",2]]} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 1.1 : Respectez-vous les règles de souveraineté des données ?" ponderationV={3} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 1.2 : Permettez vous aux personnes concernées de visualiser les données recueillies? " ponderationV={0.5} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 1.3 : Permettez-vous aux personnes concernées de modifier leurs données personnelles ? " ponderationV={0.5} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 1.4 : Permettez-vous aux personnes concernées de supprimer leurs données personnelles ? " ponderationV={0.5} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 1.5 : Permettez-vous aux personnes concernés de refuser le traitement de leur données personnelles si celles-ci ne sont pas nécessaires ? " ponderationV={0.5} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 1.6 : Permettez vous aux personnes concernés de refuser l’utilisation de leurs données dans un objectif de profilage ? " ponderationV={0.5} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 1.7 : Prévenez-vous les personnes concernées après avoir subi une fuite de données ? " ponderationV={0.5} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionCM intitule="Où stockez-vous vos données ?" reponses={[["Pays membres de l'UE + Grande-Bretagne + Suisse + Israël + Corée du Sud + Japon + Nouvelle-Zélande + Argentine + Uruguay",10],["Etats-Unis ou Canada",5],["Autres pays",0]]} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 2 : Etes-vous une entreprise américaine, russe ou chinoise" ponderationV={0} ponderationF={-5} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 4 : Y a-t-il une supervision et une gestion rigoureuses des données pour en garantir l’utilisation éthique ?" ponderationV={1} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 5 : Votre utilisation des données pourrait-elle avoir des conséquences discriminatoires pour des groupes particuliers, même si cela n’est pas intentionnel ?" ponderationV={0} ponderationF={1} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 6 : les individus détiennent-ils la propriété de leurs données et de l’utilisation qui en est faite. Avez-vous reçu leur consentement avisé pour leur utilisation dans votre contexte spécifique ?" ponderationV={1} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 7 : Les données sont-elles anonymisées lorsqu’elles sont traitées ?" ponderationV={1} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 8 : Toutes les informations que vous avez recueillies sont-elles pertinentes, nécessaires et appropriées par rapport à votre intention déclarée ?" ponderationV={1} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionCM intitule="Question 9 : Votre entreprise récolte-t-elle les données des utilisateurs ci-dessous sans en avoir une utilité de première nécessité ? " reponses={[["GPS", -3],["Enregistrements vocaux automatiques répétés",-3],["Données de l'appareil",-1],["Données personnelles (nom, âge, sexe, nationalité, orientation sexuelle, adresse du domicile …)",-2],["Informations sensibles (données bancaires, mots de passe, numéro de sécurité sociale …)",-3],["Données commerciales (cookies, préférences d’achat …)",-1]]} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 11 : Partagez-vous les données que vous récoltez sur les utilisateurs ?  " ponderationV={0} ponderationF={1} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 12 : L’entreprise fournit-elle une politique de confidentialité claire et accessible aux utilisateurs ?" ponderationV={1} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 13 : L’entreprise met-elle à disposition des outils permettant aux utilisateurs de contrôler leurs données et de gérer leurs préférences de confidentialité ?" ponderationV={1} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 14 : Transparence par rapport à l’utilisation des données, communiquez-vous votre utilisation des données aux utilisateurs ?" ponderationV={1} ponderationF={0} typeQuiz="Ethique"/>
            <QuestionVF intitule="Question 15 : Communiquez-vous comment vous stockez les données aux utilisateurs ?" ponderationV={1} ponderationF={0} typeQuiz="Ethique"/>

            <button className='button-36'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></button>
        </div>
    );
}