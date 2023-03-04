import React, { useContext, useEffect, useState } from "react";
import { Repo } from "../../@types/Repo";

import styles from "./gameScreen.module.css";
import { GameContext } from "../../context/GameContext";
import { RepoCard } from "../RepoCard";

export const GameScreen: React.FC = () => {
  const { repos, setIsGameStarted } = useContext(GameContext);
  const [repoA, setRepoA] = useState<Repo | null>(null);
  const [repoB, setRepoB] = useState<Repo | null>(null);

  useEffect(() => {
    setRepoA(repos[0]);
    setRepoB(repos[1]);
  }, []);

  function handleRepoChoice(repo: Repo) {}

  function handleReturnGame() {
    setIsGameStarted(false);
  }

  return (
    <div className={styles.gameScreen}>
      {repoA && repoB && (
        <>
          <h1 className={styles.title}>Choose the repo with the most stars</h1>

          <div className={styles.reposContainer}>
            <RepoCard content={repoA} handler={handleRepoChoice} />
            <p className={styles.versus}>X</p>
            <RepoCard content={repoB} handler={handleRepoChoice} />
          </div>
        </>
      )}

      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleReturnGame}>
          Return to Menu
        </button>
        <button className={styles.button}>Skip</button>
      </div>
    </div>
  );
};
