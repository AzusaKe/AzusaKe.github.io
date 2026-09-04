import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/global.css";

const mountNode = document.getElementById("app");

if (mountNode) {
  createRoot(mountNode).render(
    <StrictMode>
      <App page={mountNode.dataset.page ?? "home"} />
    </StrictMode>,
  );
}
