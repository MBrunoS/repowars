import { useContext, useEffect } from "react";
import { GameContext } from "../../context/GameContext";

export const WindowFocusHandler = () => {
  const { isGameStarted, setIsGameStarted, isGameFinished, setScore } =
    useContext(GameContext);

  function onBlur() {
    if (document.visibilityState === "hidden") {
      console.log("Game restarted");

      if (isGameStarted && !isGameFinished) {
        setIsGameStarted(false);
        setScore({ correct: 0, wrong: 0 });
      }
    }
  }

  useEffect(() => {
    document.addEventListener("visibilitychange", onBlur);

    return () => {
      document.removeEventListener("visibilitychange", onBlur);
    };
  }, []);

  return <></>;
};
