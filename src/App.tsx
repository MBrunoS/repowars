import { useState } from "react";
import { IntroScreen } from "./components/IntroScreen/";

import styles from "./app.module.css";

const App: React.FC = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  return <div className={styles.App}>{!isGameStarted && <IntroScreen />}</div>;
};

export default App;
