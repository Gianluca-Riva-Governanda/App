import { createTheme, responsiveFontSizes } from "@mui/material";
import { compose } from "@mui/system";
import components from "@mui/system";

export default responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#71B9DA",
      },
      secondary: {
        main: "#f00",
      },
    },
  }),
);
