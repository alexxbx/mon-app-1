import React from 'react'
import navbar from './NavBar.css'
import Compteur from './Compteur'

function NavBar({ Accueil, Produits, Contact, afficherCompteur }) {
    return (
        <div style={navbar} className="navbar">
            <button onClick={Accueil}>Accueil</button>
            <button onClick={Produits}>Produits</button>
            <button onClick={Contact}>Contact</button>
            <button onClick={afficherCompteur}>Compteur</button>
        </div>
    )
}

export default NavBar
