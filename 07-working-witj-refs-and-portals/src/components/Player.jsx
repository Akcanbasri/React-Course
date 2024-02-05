import { useState } from "react";

export default function Player() {
  const [name, setName] = useState();
  const [submitted, setSubmitted] = useState(false);

  function handleSetName(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? name : "unknown entitiy"}</h2>
      <p>
        <input type="text" onChange={handleSetName} value={name} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}