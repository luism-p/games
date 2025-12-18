import { useState } from "react";
import "./App.css";
import { GAMES } from "./constanst.js";
import { Conecta4 } from "./components/conecta4/Conecta4.jsx"
import { TresEnRaya } from "./components/tres-en-raya/TresEnRaya.jsx"


function App() {
  const [game, setGame] = useState(null);

  const handleClick = (game) => {
    setGame(game);
  };

  const changeGame = () => {
    setGame(null)
  }

  const renderGame = (game) => {
    switch (game) {
      case "TRES_EN_RAYA":
        return (<TresEnRaya changeGame={changeGame}/>);
      case "CONECTA_4":
        return (<Conecta4 changeGame={changeGame}/>);
    }
  };

  return (
    <section className="board">
      {!game
        ? Object.entries(GAMES).map(([key, value]) => {
            return (
              <button key={key} onClick={() => handleClick(key)}>
                {value}
              </button>
            );
          })
        : renderGame(game)}
    </section>
  );
}

export default App;
