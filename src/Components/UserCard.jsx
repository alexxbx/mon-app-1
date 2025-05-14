import React from 'react'
import s from './UserCard.css'

function UserCard({ name, age, img, salut }) {
    return (
        <div style={s} className="user-card">
            <img src={img} alt="User" />
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <button onClick={salut} ></button>
        </div>
    )
}

export default UserCard