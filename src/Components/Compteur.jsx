import React, { useState } from "react";

function Compteur() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Compteur : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
            <button onClick={() => setCount(count - 1)}>Décrémenter</button>
            <button onClick={() => setCount(0)}>Réinitialiser</button>
        </div>
    );
}

export default Compteur;