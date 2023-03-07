import React, { useContext } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { GameContext } from "../../context/GameContext";

import styles from "./endScreen.module.css";

const endMessages = {
  perfect: "Wow, you got a perfect score!",
  victory: "Congratulations, you scored well!",
  defeat: "Game Over! It was a close one!",
};

export const EndScreen: React.FC = () => {
  const { score, setScore, setIsGameStarted, setIsGameFinished } =
    useContext(GameContext);

  const handleRestartGame = () => {
    setIsGameStarted(false);
    setIsGameFinished(false);
    setScore({ correct: 0, wrong: 0 });
  };

  const isVictory = score.correct > score.wrong;
  const msgType =
    score.wrong === 0 && score.correct !== 0
      ? "perfect"
      : isVictory
      ? "victory"
      : "defeat";

  return (
    <div className={styles.endScreen}>
      <h1 className={styles.message}>{endMessages[msgType]}</h1>

      <div className={styles.scoreCard}>
        <h2 className={styles.scoreTitle}>Final Score</h2>
        <p className={styles.correctScore}>
          <FaCheckCircle /> {score.correct}
        </p>
        <p className={styles.wrongScore}>
          <FaTimesCircle /> {score.wrong}
        </p>
      </div>

      <button className={styles.btnRestart} onClick={handleRestartGame}>
        <RxUpdate /> Restart
      </button>
    </div>
  );
};
