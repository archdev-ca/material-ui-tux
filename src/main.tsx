import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import { TuxTheme } from "./theme.ts";
import { ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={TuxTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
