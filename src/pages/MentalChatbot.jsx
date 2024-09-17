import React from "react";
import { Box } from "@mui/material";
import MentalChatModel from "../components/MentalChatbot/MentalChatModel";

const MentalChatbot = () => {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <MentalChatModel />
    </Box>
  );
};

export default MentalChatbot;
