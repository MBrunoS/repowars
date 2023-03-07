import { useContext } from "react";
import { GameContext } from "./context/GameContext";
import { IntroScreen } from "./components/IntroScreen/";
import { GameScreen } from "./components/GameScreen";
import { EndScreen } from "./components/EndScreen";

import styles from "./app.module.css";

const App: React.FC = () => {
  const { isGameStarted, isGameFinished } = useContext(GameContext);

  return (
    <div className={styles.App}>
      {!isGameStarted && <IntroScreen />}
      {isGameStarted && (!isGameFinished ? <GameScreen /> : <EndScreen />)}
    </div>
  );
};

export default App;
