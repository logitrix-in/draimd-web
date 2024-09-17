import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "@fontsource/montserrat";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import Chatbot from "./pages/Chatbot";
import LoginPage from "./pages/LoginPage";

import { Provider } from "./utils/Context";
import MentalChatbot from "./pages/MentalChatbot";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
  },
});

const App = () => {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/mental-chatbot" element={<MentalChatbot />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
