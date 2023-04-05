import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import globalTheme from "./components/custom_theme/CustomTheme";
import MoviesTrendingPage from "./pages/movies_trending/MoviesTrendingPage";

export default function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <MoviesTrendingPage />
    </ThemeProvider>
  );
}
