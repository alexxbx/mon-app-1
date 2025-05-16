import React, { useState } from 'react';
import './UserCard.css';

function UserCard() {
    const [users, setUsers] = useState([
        { nom: 'Durand', prenom: 'Alice', age: 25, score: 0 },
        { nom: 'Martin', prenom: 'Bob', age: 17, score: 0 },
        { nom: 'Lemoine', prenom: 'Claire', age: 30, score: 0 },
        { nom: 'Petit', prenom: 'David', age: 16, score: 0 },
    ]);

    const handleScoreIncrease = (index) => {
        const updatedUsers = [...users];
        updatedUsers[index].score += 5;
        setUsers(updatedUsers);
    };

    function StyleScore(score) {
        if (score > 40) {
            return 'text-green-500';
        } else if (score > 20) {
            return 'text-yellow-500';
        } else {
            return 'text-red-500';
        }
    }


    const maxScore = Math.max(...users.map(u => u.score));



    return (
        <div className="user-list">
            {users.map((user, index) => (
                <div key={index} className={`user-card ${StyleScore(user.score)}`}>
                    <h1 className="text-3xl font-bold underline">{user.nom}</h1>
                    <p>{user.prenom}</p>
                    <p>{user.age} ans</p>
                    <p>Score: {user.score} {user.score == maxScore && maxScore > 0 && "🏆"}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleScoreIncrease(index)}
                    >
                        Augmenter le score
                    </button>
                </div>
            ))}
        </div>
    );
}

export default UserCard;
