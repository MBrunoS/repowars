import React, { useContext, useEffect, useState } from "react";
import { Repo } from "../../@types/Repo";

import styles from "./gameScreen.module.css";
import { GameContext } from "../../context/GameContext";
import { RepoCard } from "../RepoCard";
import { useRandomRepos } from "../../hooks";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { BsChevronLeft, BsFillSkipEndFill } from "react-icons/bs";

export const GameScreen: React.FC = () => {
  const { repos, setIsGameStarted, setIsGameFinished, score, setScore } =
    useContext(GameContext);
  const [localRepos, setLocalRepos] = useState<Repo[]>(repos);
  const [repoA, setRepoA] = useState<Repo>({} as Repo);
  const [repoB, setRepoB] = useState<Repo>({} as Repo);
  const randomRepos = useRandomRepos();
  const [counter, setCounter] = useState(1);
  const totalMatches = Math.floor(repos.length / 2);

  useEffect(() => {
    updateRepos();
  }, []);

  function updateRepos() {
    if (localRepos.length < 2) {
      handleEndGame();
      return;
    }

    const [newRepoA, newRepoB] = randomRepos.generate(localRepos);

    const newLocalRepos = localRepos.filter(
      (repo) => repo.id !== newRepoA!.id && repo.id !== newRepoB!.id
    );

    setRepoA(newRepoA!);
    setRepoB(newRepoB!);
    setLocalRepos(newLocalRepos);
  }

  function handleRepoChoice(repo: Repo) {
    const winner =
      repoA.stargazers_count > repoB.stargazers_count ? repoA : repoB;

    if (repo.id === winner.id) {
      setScore((prevScore) => ({
        ...prevScore,
        correct: prevScore.correct + 1,
      }));
    } else {
      setScore((prevScore) => ({ ...prevScore, wrong: prevScore.wrong + 1 }));
    }

    setCounter((prevCounter) => prevCounter + 1);
    updateRepos();
  }

  function handleReturnGame() {
    setIsGameStarted(false);
  }

  function handleSkip() {
    setCounter((prevCounter) => prevCounter + 1);
    updateRepos();
  }

  function handleEndGame() {
    setIsGameFinished(true);
  }

  return (
    <div className={styles.gameScreen}>
      <h1 className={styles.title}>Choose the repo with the most stars</h1>

      <div className={styles.gameStatus}>
        <div className={styles.score}>
          <p className={styles.scoreCorrect}>
            <FaCheckCircle /> {score.correct}
          </p>
          <p className={styles.scoreWrong}>
            <FaTimesCircle /> {score.wrong}
          </p>
        </div>

        <div className={styles.counter}>
          {counter}/{totalMatches}
        </div>
      </div>
      {repoA.id && repoB.id && (
        <div className={styles.reposContainer}>
          <RepoCard content={repoA} handler={handleRepoChoice} />
          <p className={styles.versus}>vs</p>
          <RepoCard content={repoB} handler={handleRepoChoice} />
        </div>
      )}

      <div className={styles.buttons}>
        <button className={styles.button} onClick={handleReturnGame}>
          <BsChevronLeft /> Return to Menu
        </button>
        <button className={styles.button} onClick={handleSkip}>
          Skip <BsFillSkipEndFill />
        </button>
      </div>
    </div>
  );
};
