import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QuizzicalPage from "./pages/quizzical/QuizzicalPage";
import { ThemeProvider } from "@emotion/react";
import globalTheme from "./components/custom_theme/CustomTheme";

export default function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <QuizzicalPage />
    </ThemeProvider>
  );
}
