import React from 'react'
import { useState } from 'react'

function Calculatrice() {
    const [result, setResult] = useState(0);

    const handleButtonClick = (e) => {
        const value = e.target.textContent;
        // Logique pour gérer les clics sur les boutons
        // Vous pouvez mettre à jour l'état de la calculatrice ici
        console.log(value);
        setResult((prevResult) => prevResult + value);
    };

    const handleEqualClick = () => {
        // Logique pour évaluer l'expression
        // Vous pouvez utiliser eval() ou une autre méthode pour évaluer l'expression
        try {
            const evaluatedResult = eval(result);
            setResult(evaluatedResult);
        } catch (error) {
            console.error("Erreur d'évaluation :", error);
            setResult("Erreur");
        }
    }
    const handleClearClick = () => {
        // Logique pour effacer l'affichage
        setResult("");
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-2xl font-bold text-white'>Calculatrice</h1>
            <div className="bg-gray-800 p-4 rounded-lg mt-4">
                <input type="text" className='bg-gray-700 text-white p-2 rounded-lg' value={result} readOnly />
            </div>
            <div className='grid grid-cols-4 gap-4 mt-4 text-black'>
                <button onClick={handleButtonClick} className=''>0</button>
                <button onClick={handleButtonClick} className=''>1</button>
                <button onClick={handleButtonClick} className=''>2</button>
                <button onClick={handleButtonClick} className=''>3</button>
                <button onClick={handleButtonClick} className=''>4</button>
                <button onClick={handleButtonClick} className=''>5</button>
                <button onClick={handleButtonClick} className=''>6</button>
                <button onClick={handleButtonClick} className=''>7</button>
                <button onClick={handleButtonClick} className=''>8</button>
                <button onClick={handleButtonClick} className=''>9</button>
                <button onClick={handleButtonClick} className=''>+</button>
                <button onClick={handleButtonClick} className=''>-</button>
                <button onClick={handleButtonClick} className=''>*</button>
                <button onClick={handleButtonClick} className=''>/</button>
                <button onClick={handleButtonClick} className=''>.</button>
                <button onClick={handleClearClick} className=''>C</button>
                <button onClick={handleEqualClick} className=''>=</button>

            </div>
        </div>
    )
}

export default Calculatrice