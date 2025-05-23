import React from 'react';

function BoutonAjouter({ onClick, index }) {
    return <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => onClick(index)}> Ajouter(#{index})</button >;
}

export default BoutonAjouter;
