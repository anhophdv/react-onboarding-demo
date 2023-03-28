import React from "react";
import { createTheme } from "@mui/material";
import { AppColorConstants } from "../../utils/AppConstants";

const globalTheme = createTheme({
  palette: {
    primary: {
      main: "#373A67",
    },
    text: {
      primary: "#373A67",
      disabled: "#9E9FAD",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Roboto",
    },
    fontSize: 16,
    h3: {
      fontWeight: 700,
      fontSize: "2.2rem",
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.75rem",
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

export default globalTheme;
