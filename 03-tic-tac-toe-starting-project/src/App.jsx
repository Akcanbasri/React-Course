import PlayerInfo from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";


function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameState, setGameState] = useState([])
    

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            name="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <PlayerInfo
            name="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        {
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSybol={activePlayer}
          />
        }
      </div>
      <Log />
    </main>
  );
}

export default App;
