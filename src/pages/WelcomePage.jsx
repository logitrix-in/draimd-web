import React from "react";
import Landing from "../components/WelcomePage/Landing";
import { Box } from "@mui/system";

const WelcomePage = () => {
  return (
    <Box sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Landing />
    </Box>
  );
};

export default WelcomePage;
