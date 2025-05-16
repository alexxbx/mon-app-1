import React from 'react';
import BoutonAjouter from './BoutonAjouter';
import BoutonSupprimer from './BoutonSupprimer';
import { useState } from 'react';

function TexteBouton() {
    const [text, setText] = useState([]);

    const handleAjouter = (index) => {
        setText(prev => [
            ...prev,
            `Ceci est l'élément généré par le bouton ${index}`
        ]);
    };

    const handleSupprimer = () => {
        setText('');
    };

    return (
        <div>
            <p>{text}</p>
            <BoutonAjouter onClick={handleAjouter} />
            <BoutonSupprimer onClick={handleSupprimer} />
        </div>
    );
}

export default TexteBouton;
