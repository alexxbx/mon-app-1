import React from 'react'
import s from './Bonjour.css'

function Bonjour({ name }) {
    return (
        <>
            <div style={s}>Bonjour {name}</div>
            <p>ça va</p>
        </>

    )
}

export default Bonjour