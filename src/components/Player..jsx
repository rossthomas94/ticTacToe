import React, { useState } from "react";

export default function Player({ defaultName, isActive, synbol }) {
    const [name, setName] = useState(defaultName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClicked() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    let playerName = <span className='player-name'>{name}</span>;
    let buttonValue = 'EDIT';

    if (isEditing) {
        playerName = <input type='text' required value={name} onChange={handleChange} />;
        buttonValue = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {playerName}
                <span className='player-symbol'>{synbol}</span>
            </span>
            <button onClick={handleEditClicked}>{buttonValue}</button>
        </li>
    );
}