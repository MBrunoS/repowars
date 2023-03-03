import { createContext, useState } from "react";
import { Repo } from "../@types/Repo";
import { useRepos } from "../components/hooks";

type GameContextType = {
  isGameStarted: boolean;
  setIsGameStarted: (isGameStarted: boolean) => void;
  handleStartGame: () => void;
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
  const { repos, isReposLoading } = useRepos(50);

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        setIsGameStarted,
        handleStartGame,
        repos,
        isReposLoading,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
