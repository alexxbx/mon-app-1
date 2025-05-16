import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Compteur from './Components/Compteur';
import Calculatrice from './Components/Calculatrice';
import Binome from './Components/Binome';
import UserCard from './Components/UserCard';
import TexteBouton from './Components/TexteBouton';

function App() {
  const [message, setMessage] = useState('');
  const [showCompteur, setShowCompteur] = useState(false);

  const Accueil = () => {
    setMessage('Bienvenue dans Accueil');
    setShowCompteur(false);
  };

  const Produits = () => {
    setMessage('Bienvenue dans Produits');
    setShowCompteur(false);
  };

  const Contact = () => {
    setMessage('Bienvenue dans Contact');
    setShowCompteur(false);
  };

  const afficherCompteur = () => {
    setMessage('');
    setShowCompteur(true);
  };

  return (
    <div className="App">

      <Binome />
      <UserCard />
      <TexteBouton />
    </div>
  );
}

export default App;