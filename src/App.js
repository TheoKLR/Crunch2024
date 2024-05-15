import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Assurez-vous d'importer Routes
import './App.css';

import {Home} from './screens/Home.tsx';
import {Ethique} from './screens/Ethique.tsx';
import {Environnement} from './screens/Environnement.tsx';
import {Securite} from './screens/Securite.tsx';
import {Bilan} from './screens/Bilan.tsx';


function App() {

    localStorage.setItem("scoreGlobal", "0");
    localStorage.setItem("scoreEnvironnement", "0");
    localStorage.setItem("scoreEthique", "0");
    localStorage.setItem("scoreSecurite", "0");
    localStorage.setItem("bilanFinal", "");

  return (
    <Router>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/environnement" element={<Environnement />} />
          <Route path="/securite" element={<Securite />} />
          <Route path="/ethique" element={<Ethique />} />
          <Route path="/Bilan" element={<Bilan />} />
        </Routes>
    </Router>
  );
}

export default App;
