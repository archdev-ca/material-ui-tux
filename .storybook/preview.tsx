import React from "react";
import { ThemeProvider } from "@mui/material";
import { TuxTheme } from "../src/theme";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => {
      return (
        <ThemeProvider theme={TuxTheme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
