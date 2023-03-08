import { vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { IntroScreen } from "./IntroScreen";
import { GameContext } from "../../context/GameContext";
import styles from "./introScreen.module.css";

describe("IntroScreen", () => {
  const setIsGameStarted = vi.fn();
  const isReposLoading = false;

  const { container, getByText } = render(
    <GameContext.Provider value={{ setIsGameStarted, isReposLoading } as any}>
      <IntroScreen />
    </GameContext.Provider>
  );

  it("renders title and description", () => {
    expect(container.getElementsByClassName(styles.title)).toHaveLength(1);
    expect(getByText("Github repositories guessing game")).toHaveClass(
      styles.description
    );
  });

  it("handles start game button click", () => {
    setTimeout(() => {
      fireEvent.click(container.getElementsByClassName(styles.btnStart)[0]);
      expect(setIsGameStarted).toHaveBeenCalledWith(true);
    }, 4000);
  });

  it("disables start game button while repos are loading", () => {
    const { getByText } = render(
      <GameContext.Provider
        value={{ setIsGameStarted, isReposLoading: true } as any}
      >
        <IntroScreen />
      </GameContext.Provider>
    );

    setTimeout(() => {
      expect(getByText("Start").attributes.getNamedItem("disabled")).toBe(true);
    }, 4000);
  });
});
