import React, { useState } from 'react';
import { QuestionVF } from '../components/QuestionVF.tsx';
import { QuestionCM } from '../components/QuestionCM.jsx';
import { Link } from 'react-router-dom';

export const Securite = () => {
    return (
        <div>
            <h1>Page Sécurité</h1>

                    <QuestionCM intitule="Quels sont les systèmes de backup de données ?" reponses={[["Aucun",0],["On-site backup",1],["Tape Backup",1],["Cloud Backup",1],["Hybrid Backup",2]]} typeQuiz="Securite" texteReponse="- Il faut déployer un système de backup, en privilégiant le “Hybrid backup”."/>

                    <QuestionCM intitule="A quelle fréquence effectuez-vous des sauvegardes de la base de données ?" reponses={[["Jamais",0],["1 fois par an",0],["1 fois par mois",0.5],["1 fois par semaine",1],["1 fois par jours",2]]} typeQuiz="Securite" texteReponse="- Faites des sauvegardes au moins 1 fois par semaine et selon la taille et l'importance de votre entreprise, prévoyez d'en faire 1 fois par jours pour éviter les pertes de données en cas de crash par exemple."/>

                    <QuestionCM intitule="Quelles mesures de sécurité physique sont mises en place pour protéger les supports de stockage?" reponses={[["Contrôle d'accès physique",1],["Coffres-forts et armoires sécurisées",1],["Surveillance et alarmes",1],["Gestion des actifs RFID",2],["Protection contre les incendies",2]]} typeQuiz="Securite" texteReponse="- Vous pouvez mettre en place certaines mesure de sécurité physique pour optimiser la sécurité physique de vos locaux."/>

                    <QuestionCM intitule="Quels protocoles de sécurité sont utilisés pour protéger l’accès aux données ?" reponses={[["AUthentification simple",0],["Authentification multifactorielle",1],["Protocole d'authentification sécurisé (OpenID...)",2],["Gestion de mot de passe (mot de passe fort, rotation régulière...)",1],["Protocole Kerberos",1]]} typeQuiz="Securite" texteReponse="- Déployer un protocole pour protéger l'accès aux données tel que OpenID par exemple."/>

                    <QuestionCM intitule="A quelle fréquence des tests d’intrusion et des évaluations de vulnérabilité sont-ils effectués?" reponses={[["Jamais",0],["1 fois par ans",0.5],["1 fois par mois",1],["1 fois par semaine",2]]} typeQuiz="Securite" texteReponse="- Faites des tests d’intrusion et des évaluations de vulnérabilité au moins 1 fois par semaine."/>

                    <QuestionCM intitule="Quel est le protocole de sécurité réseau utilisé par l’entreprise ?" reponses={[["Aucun",0],["IPsec/VPN",2],["SSL/TLS",2],["DTLS",1],["SNMPv3",1],["HTTPS",1],["SSH",1]]} typeQuiz="Securite" texteReponse="- Mettez en place un protocole de sécurité réseau pour améliorer votre sécurité informatique."/>

                    <QuestionVF intitule="Un plan de réponse aux incidents est-il en place en cas de cyberattaque ?" ponderationV={1} ponderationF={0} typeQuiz="Securite" texteReponse="- Mettez en place un plan de réponse aux incidents en cas de cyberattaque."/>

                    <QuestionCM intitule="Les employés sont-ils sensibilisés aux risques de cybersécurité et aux bonnes pratiques de sécurité des données?" reponses={[["Non",0],["1 fois sur la carrière",0],["1 fois tous les 5 ans",0],["Au moins 1 fois par ans",2]]} typeQuiz="Securite" texteReponse="- Sensibilisez vos employés aux risques de cybersécurité au moins 1 fois par an."/>

                    <QuestionCM intitule="L'entreprise dispose-t-elle d'un plan de continuité d'activité et/ou de reprise après sinistre pour assurer la disponibilité des données et des systèmes en cas de sinistre majeur ?" reponses={[["Non",0],["Oui et tests au moins une fois par an",2],["Oui mais pas de tests réguliers",0.5]]} typeQuiz="Securite" texteReponse="- Mettez en place un plan de continuité d’activité en cas de sinistre pour assurer la disponibilité des données."/>

                    <QuestionCM intitule="Quelles sont les solutions de protection contre les malwares et les ransomwares utilisées?" reponses={[["Aucun",0],["Antivirus pour chaque appareil",1],["Firewall",2],["Messagerie sécurisée",1],["Gestion des identités et des accès IAM",1],["Confier sa sécurité à un fournisseur tier (MSSP)",1]]} typeQuiz="Securite" texteReponse="- Mettez en place des solutions de protection contre les malwares et ransomwares."/>

                    <QuestionVF intitule="Les applications sont-elles régulièrement mises à jour avec les derniers correctifs de sécurité ?" ponderationV={1} ponderationF={-1} typeQuiz="Securite" texteReponse="- Mettez régulièrement à jour vos applications avec toutes les corrections de sécurité."/>

                    <QuestionVF intitule="Des audits de conformité aux réglementations en vigueur sur la protection des données sont-ils effectués régulièrement ?" ponderationV={2} ponderationF={0} typeQuiz="Securite" texteReponse="-Faites des audits de conformité aux réglementations en vigueur sur la protection des données au moins 1 fois par an ou en respectant les règles que vous suivez (RGPD...)."/>

                    <button className='button-36'><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></button>
        </div>
    );
}