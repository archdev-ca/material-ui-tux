import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}

export const TuxTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      dark: purple[700],
      main: purple[500],
      light: purple[200],
    },
  },
  components: {
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: "link" },
              style: () => {
                return {
                  display: "none",
                };
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          variants: [
            {
              props: { variant: "link" },
              style: ({ theme }) => {
                return {
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                  ".MuiTouchRipple-root": {
                    display: "none",
                  },
                };
              },
            },
            {
              props: { variant: "link", size: "small" },
              style: ({ theme }) => {
                return {
                  fontSize: "0.8125rem",
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.primary.dark,
                  },
                  ".MuiTouchRipple-root": {
                    display: "none",
                  },
                };
              },
            },
          ],
        },
      },
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
      },
    },
  },
});
