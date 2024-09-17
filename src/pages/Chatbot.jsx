import React from "react";
import { Box } from "@mui/material";
import ChatModel from "../components/Chatbot/ChatModel";

const Chatbot = () => {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <ChatModel />
    </Box>
  );
};

export default Chatbot;
