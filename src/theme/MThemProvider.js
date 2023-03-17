import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const PRIMARY = {
  main: "#d74742",
  contrastText: "#fff",
};
const SECONDARY = {
  main: "#292FF2",
  contrastText: "#fff",
};
const SUCCESS = {
  main: "#1DF267",
  contrastText: "#000",
};
const ACTIVE = {
  active: "#d74742",
  contrastText: "#000",
};
const ERROR = {
  main: "#F23C35",
  contrastText: "#000",
};
const WARNING = {
  main: "#F2D34E",
  contrastText: "#000",
};
// const VARIANTBTN = {

// }

function MThemeProvider({ children }) {
  const themeOptions = createTheme({
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      action: ACTIVE,
      success: SUCCESS,
      error: ERROR,
      warning: WARNING,
    },
  });
  const theme = createTheme(
    {
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              marginBottom: "1rem",
            },
          },
          variants: [
            {
              props: { variant: "main" },
              style: {
                "&:hover": {
                  backgroundColor: themeOptions.palette.primary.main,
                  color: "#fff",
                },
                color: "#000",
              },
            },
            {
              props: { variant: "success" },
              style: {
                "&:hover": {
                  backgroundColor: themeOptions.palette.success.light,
                },
                "&:focus": {
                  outline: "none",
                },
                color: themeOptions.palette.success.contrastText,
                backgroundColor: themeOptions.palette.success.main,
              },
            },
            {
              props: { variant: "error" },
              style: {
                "&:hover": {
                  backgroundColor: themeOptions.palette.error.light,
                },
                "&:focus": {
                  outline: "none",
                },
                color: themeOptions.palette.error.contrastText,
                backgroundColor: themeOptions.palette.error.main,
              },
            },
          ],
        },
      },
    },
    themeOptions
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MThemeProvider;
