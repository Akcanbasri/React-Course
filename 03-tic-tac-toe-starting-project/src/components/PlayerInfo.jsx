import React, { useState } from "react";

export default function PlayerInfo(params) {
  const [name, setName] = useState(params.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    if (isEditing) {
      // Update the name state first
      setName(name);
  
      // Then call the function to update the parent component
      params.onNameChange(name);
    }
  
    setIsEditing((editing) => !editing);
  }
  
  

  function handleNameChange(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = (
      <input type="text" required value={name} onChange={handleNameChange} />
    );
  }

  return (
    <li className={params.isActive ? "active":undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{params.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
