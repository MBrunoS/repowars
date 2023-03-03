import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";

import styles from "./introScreen.module.css";

export const IntroScreen: React.FC = () => {
  const { handleStartGame } = useContext(GameContext);

  return (
    <>
      <h1 className={styles.title}>
        <span
          className={styles.repo}
          data-text="REPO"
          style={{ "--stacks": 3 } as React.CSSProperties}
        >
          <span style={{ "--index": 0 } as React.CSSProperties}>REPO</span>
          <span style={{ "--index": 1 } as React.CSSProperties}>REPO</span>
          <span style={{ "--index": 2 } as React.CSSProperties}>REPO</span>
        </span>
        <span className={styles.wars}>WARS</span>
      </h1>
      <p className={styles.description}>Github repositories guessing game</p>
      <button className={styles.btnStart} onClick={handleStartGame}>
        Start
      </button>
    </>
  );
};
