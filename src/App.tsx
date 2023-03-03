import { useContext } from "react";
import { IntroScreen } from "./components/IntroScreen/";

import styles from "./app.module.css";
import { GameContext } from "./context/GameContext";
import { GameScreen } from "./components/GameScreen";

const App: React.FC = () => {
  const { isGameStarted } = useContext(GameContext);

  return (
    <div className={styles.App}>
      {!isGameStarted && <IntroScreen />}
      {isGameStarted && <GameScreen />}
    </div>
  );
};

export default App;
