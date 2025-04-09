import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { TuxTheme } from "./theme";
import { ThemeProvider } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={TuxTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
