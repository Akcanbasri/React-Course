import React, { useState } from "react";

export default function PlayerInfo(params) {
  const [name, setName] = useState(params.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // If in editing mode, save the new name to the prop
    if (isEditing) {
      params.onNameChange(name); // assuming you have a function to update the parent component
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
