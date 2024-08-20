import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CardDisplays from "../CardDisplays";
import Dashboard from "./Dashboard";
import Account from "./Account";

const NavigationButtons = () => {
  const [activeButton, setActiveButton] = useState("Home");

  const renderComponent = () => {
    switch (activeButton) {
      case "Home":
        return <CardDisplays />;
      case "Dashboard":
        return <Dashboard />;
      case "Account":
        return <Account />;
      case "Vitals":
        return;
      case "Medical History":
        return;
      case "More":
        return;
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginX: "15px",
          marginY: "10px",
          gap: "20px",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            color: "black",
            fontWeight: "700",
          }}
          onClick={() => setActiveButton("Home")}
        >
          Home
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            color: "black",
            fontWeight: "700",
          }}
          onClick={() => setActiveButton("Dashboard")}
        >
          Dashboard
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            color: "black",
            fontWeight: "700",
          }}
          onClick={() => setActiveButton("Account")}
        >
          Account
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            color: "black",
            fontWeight: "700",
          }}
          onClick={() => setActiveButton("Vitals")}
        >
          Vitals
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            color: "black",
            fontWeight: "700",
          }}
          onClick={() => setActiveButton("Medical History")}
        >
          Medical History
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            color: "black",
            fontWeight: "700",
          }}
          onClick={() => setActiveButton("More")}
        >
          More
        </Button>
      </Box>
      <Box sx={{marginX: "10px"}}>{renderComponent()}</Box>
    </div>
  );
};

export default NavigationButtons;
