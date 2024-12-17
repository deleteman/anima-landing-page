import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { ThemeProvider } from "./theme/ThemeProvider";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  </StrictMode>,
);
