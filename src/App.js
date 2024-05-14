import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Assurez-vous d'importer Routes
import './App.css';

import {Home} from './screens/Home.tsx';
import {Ethique} from './screens/Ethique.tsx';
import {Environnement} from './screens/Environnement.tsx';
import {Securite} from './screens/Securite.tsx';

function App() {
  return (
    <Router>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/environnement" element={<Environnement />} />
          <Route path="/securite" element={<Securite />} />
          <Route path="/ethique" element={<Ethique />} />
        </Routes>
    </Router>
  );
}

export default App;
