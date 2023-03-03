import { createContext, useState } from "react";

type GameContextType = {
  isGameStarted: boolean;
  setIsGameStarted: (isGameStarted: boolean) => void;
  handleStartGame: () => void;
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

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  return (
    <GameContext.Provider
      value={{ isGameStarted, setIsGameStarted, handleStartGame }}
    >
      {children}
    </GameContext.Provider>
  );
};
