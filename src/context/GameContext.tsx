import { createContext, useState } from "react";
import { Repo } from "../@types/Repo";
import { useRepos } from "../hooks";

type GameContextType = {
  isGameStarted: boolean;
  setIsGameStarted: React.Dispatch<React.SetStateAction<boolean>>;
  isGameFinished: boolean;
  setIsGameFinished: React.Dispatch<React.SetStateAction<boolean>>;
  score: { correct: number; wrong: number };
  setScore: React.Dispatch<
    React.SetStateAction<{
      correct: number;
      wrong: number;
    }>
  >;
  repos: Repo[];
  isReposLoading: boolean;
};

export const GameContext = createContext<GameContextType>(
  {} as GameContextType
);

type GameContextProviderProps = {
  children: React.ReactNode;
};

export const GameContextProvider: React.FC<GameContextProviderProps> = ({
  children,
}) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const { repos, isReposLoading } = useRepos(40);

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        setIsGameStarted,
        isGameFinished,
        setIsGameFinished,
        score,
        setScore,
        repos,
        isReposLoading,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
