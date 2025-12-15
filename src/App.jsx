import { useState } from "react";
import "./App.css";
import { GAMES } from "./constanst.js";
import { TRES_EN_RAYA } from "./components/tres-en-raya/Index.jsx";
import { CONECTA_4 } from "./components/conecta4/Index.jsx";

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
        return (<TRES_EN_RAYA changeGame={changeGame}/>);
      case "CONECTA_4":
        return (<CONECTA_4 changeGame={changeGame}/>);
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
