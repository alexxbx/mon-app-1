import React, { useState } from "react";

// Composant principal
export default function BinomeTable() {
    // État pour stocker la liste des participants
    const [participants, setParticipants] = useState([]);

    // État pour le champ de saisie du nom
    const [nameInput, setNameInput] = useState("");

    // État pour les binômes générés
    const [binomes, setBinomes] = useState([]);

    // État pour savoir quel participant est en cours d'édition
    const [editIndex, setEditIndex] = useState(null);

    // État pour stocker la valeur temporaire modifiée
    const [editValue, setEditValue] = useState("");

    // Fonction pour ajouter un participant
    const addParticipant = () => {
        if (nameInput.trim() === "") return; // Ignore les champs vides
        setParticipants([...participants, nameInput.trim()]); // Ajoute le nom à la liste
        setNameInput(""); // Réinitialise le champ de saisie
    };

    // Supprime un participant
    const removeParticipant = (index) => {
        const updated = [...participants];
        updated.splice(index, 1); // Supprime l'élément à l'index donné
        setParticipants(updated);

        // Si on supprimait l'élément actuellement en édition, on annule l'édition
        if (editIndex === index) {
            setEditIndex(null);
            setEditValue("");
        }
    };

    // Active l'édition pour un participant
    const startEdit = (index) => {
        setEditIndex(index); // Définit l'index en cours d'édition
        setEditValue(participants[index]); // Pré-remplit le champ avec l'ancien nom
    };

    // Sauvegarde la modification du participant
    const saveEdit = (index) => {
        const updated = [...participants];
        updated[index] = editValue.trim(); // Remplace l'ancien nom
        setParticipants(updated); // Met à jour la liste
        setEditIndex(null); // Ferme le mode édition
        setEditValue("");
    };

    // Annule la modification
    const cancelEdit = () => {
        setEditIndex(null);
        setEditValue("");
    };

    // Fonction utilitaire pour mélanger aléatoirement un tableau
    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    // Génère des binômes à partir des participants
    const createBinomes = () => {
        const shuffled = shuffleArray(participants); // Mélange les participants
        const pairs = [];

        // Regroupe les participants 2 par 2
        for (let i = 0; i < shuffled.length; i += 2) {
            const first = shuffled[i];
            const second = shuffled[i + 1] || "(seul)"; // Si impair, le dernier est seul
            pairs.push([first, second]);
        }

        setBinomes(pairs); // Met à jour la liste des binômes
    };

    return (
        <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-2xl space-y-4">
            {/* Titre de la page */}
            <h2 className="text-2xl font-bold">Créateur de binômes</h2>

            {/* Zone de saisie pour ajouter un participant */}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="border rounded p-2 flex-1"
                    placeholder="Nom du participant"
                />
                <button onClick={addParticipant}>Ajouter</button>
            </div>

            {/* Liste des participants avec options modifier/supprimer */}
            <ul className="space-y-1">
                {participants.map((name, index) => (
                    <li key={index} className="flex justify-between items-center gap-2">
                        {editIndex === index ? (
                            // Affiche les champs de modification
                            <div className="flex flex-1 gap-2">
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                    className="border rounded p-1 flex-1"
                                />
                                <button size="sm" onClick={() => saveEdit(index)}>
                                    Enregistrer
                                </button>
                                <button variant="outline" size="sm" onClick={cancelEdit}>
                                    Annuler
                                </button>
                            </div>
                        ) : (
                            // Affiche le nom et les boutons actions
                            <>
                                <span className="flex-1">{name}</span>
                                <div className="flex gap-2">
                                    <button size="sm" onClick={() => startEdit(index)}>
                                        Modifier
                                    </button>
                                    <button variant="outline" size="sm" onClick={() => removeParticipant(index)}>
                                        Supprimer
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>

            {/* Bouton pour générer les binômes (visible si au moins 2 participants) */}
            {participants.length >= 2 && (
                <button className="w-full mt-4" onClick={createBinomes}>
                    Générer les binômes
                </button>
            )}

            {/* Affichage du tableau des binômes */}
            {binomes.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Binômes générés :</h3>
                    <table className="w-full border rounded">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-2 border">Participant 1</th>
                                <th className="p-2 border">Participant 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {binomes.map((pair, i) => (
                                <tr key={i} className="text-center">
                                    <td className="p-2 border">{pair[0]}</td>
                                    <td className="p-2 border">{pair[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
