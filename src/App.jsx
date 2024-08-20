import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "@fontsource/montserrat";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
