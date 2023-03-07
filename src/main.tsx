import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WindowFocusHandler } from "./components/WindowFocusHandler";
import { GameContextProvider } from "./context/GameContext";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GameContextProvider>
      <WindowFocusHandler />
      <App />
    </GameContextProvider>
  </React.StrictMode>
);
