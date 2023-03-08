import { render } from "@testing-library/react";
import App from "./App";
import { GameContext } from "./context/GameContext";

describe("App", () => {
  it("renders IntroScreen initially", () => {
    const { getByText } = render(
      <TestContextWrapper>
        <App />
      </TestContextWrapper>
    );
    const introScreen = getByText("Github repositories guessing game");
    expect(introScreen).toBeInTheDocument();
  });

  it("renders GameScreen when isGameStarted is true and isGameFinished is false", () => {
    const { getByText } = render(
      <TestContextWrapper isGameStarted={true}>
        <App />
      </TestContextWrapper>
    );

    const gameScreen = getByText("Choose the repo with the most stars");

    expect(gameScreen).toBeInTheDocument();
  });

  it("renders EndScreen when isGameStarted is true and isGameFinished is true", () => {
    const { getByText } = render(
      <TestContextWrapper isGameStarted={true} isGameFinished={true}>
        <App />
      </TestContextWrapper>
    );

    const endScreen = getByText("Final Score");

    expect(endScreen).toBeInTheDocument();
  });
});

type TestContextWrapperProps = {
  children: React.ReactNode;
  isGameStarted?: boolean;
  isGameFinished?: boolean;
};
const TestContextWrapper: React.FC<TestContextWrapperProps> = ({
  children,
  isGameStarted = false,
  isGameFinished = false,
}) => {
  return (
    <GameContext.Provider
      value={{
        isGameStarted,
        setIsGameStarted: () => {},
        isGameFinished,
        setIsGameFinished: () => {},
        score: { wrong: 0, correct: 0 },
        setScore: () => {},
        repos: [],
        isReposLoading: false,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
