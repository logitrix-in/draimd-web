import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import CardDisplaysHome from "./CardDisplaysHome";
import Dashboard from "./Dashboard";
import Account from "./Account";
import { useMediaQuery } from "@mui/material";

const NavigationButtons = () => {
  const isTablet = useMediaQuery("(max-width: 1100px)");

  const [activeButton, setActiveButton] = useState("Home");

  // render component based on what button is clicked
  const renderComponent = () => {
    switch (activeButton) {
      case "Home":
        return <CardDisplaysHome />;
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
    <Box>
{/* navigation buttons */}
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
            fontWeight: "700",
            borderRadius: "10px",
            backgroundColor: activeButton === "Home" ? "#0db2b2" : "white",
            color: activeButton === "Home" ? "white" : "black",
            transition: "0.3 ease-in-out",
            "&:hover": {
              backgroundColor: activeButton === "Home" ? "#00b2b2" : "#dbf4f4",
            },
            fontSize: isTablet? "12px":"14px",
          }}
          onClick={() => setActiveButton("Home")}
        >
          Home
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            fontWeight: "700",
            borderRadius: "10px",
            backgroundColor: activeButton === "Dashboard" ? "#0db2b2" : "white",
            color: activeButton === "Dashboard" ? "white" : "black",
            transition: "0.3 ease-in-out",
            "&:hover": {
              backgroundColor: activeButton === "Dashboard" ? "#00b2b2" : "#dbf4f4",
            },
            fontSize: isTablet? "12px":"14px",
          }}
          onClick={() => setActiveButton("Dashboard")}
        >
          Dashboard
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            fontWeight: "700",
            borderRadius: "10px",
            backgroundColor: activeButton === "Account" ? "#0db2b2" : "white",
            color: activeButton === "Account" ? "white" : "black",
            transition: "0.3 ease-in-out",
            "&:hover": {
              backgroundColor: activeButton === "Account" ? "#00b2b2" : "#dbf4f4",
            },
            fontSize: isTablet? "12px":"14px",
          }}
          onClick={() => setActiveButton("Account")}
        >
          Account
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            fontWeight: "700",
            borderRadius: "10px",
            backgroundColor: activeButton === "Vitals" ? "#0db2b2" : "white",
            color: activeButton === "Vitals" ? "white" : "black",
            transition: "0.3 ease-in-out",
            "&:hover": {
              backgroundColor: activeButton === "Vitals" ? "#00b2b2" : "#dbf4f4",
            },
            fontSize: isTablet? "12px":"14px",
          }}
          onClick={() => setActiveButton("Vitals")}
        >
          Vitals
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            fontWeight: "700",
            borderRadius: "10px",
            backgroundColor: activeButton === "Medical History" ? "#0db2b2" : "white",
            color: activeButton === "Medical History" ? "white" : "black",
            transition: "0.3 ease-in-out",
            "&:hover": {
              backgroundColor: activeButton === "Medical History" ? "#00b2b2" : "#dbf4f4",
            },
            fontSize: isTablet? "12px":"14px",
          }}
          onClick={() => setActiveButton("Medical History")}
        >
          Medical History
        </Button>
        <Button
          sx={{
            textTransform: "none",
            paddingX: "20px",
            fontWeight: "700",
            borderRadius: "10px",
            backgroundColor: activeButton === "More" ? "#0db2b2" : "white",
            color: activeButton === "More" ? "white" : "black",
            transition: "0.3 ease-in-out",
            "&:hover": {
              backgroundColor: activeButton === "More" ? "#00b2b2" : "#dbf4f4",
            },
            fontSize: isTablet? "12px":"14px",
          }}
          onClick={() => setActiveButton("More")}
        >
          More
        </Button>
      </Box>

      {/* components injection */}
      <Box sx={{ marginX: "10px" }}>{renderComponent()}</Box>
    </Box>
  );
};

export default NavigationButtons;
