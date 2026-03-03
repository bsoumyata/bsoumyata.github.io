import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Fade out and remove CSS preloader when the page finishes loading
const hidePreloader = () => {
  const el = document.getElementById("preloader");
  if (!el) return;
  el.classList.add("hidden");
  window.setTimeout(() => {
    el.parentElement && el.parentElement.removeChild(el);
  }, 350);
};

// Show the preloader for a fixed 2 seconds
window.setTimeout(hidePreloader, 2000);
