import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Address from "./Address";
import { render } from "react-dom";
import Profile from "./Profile";

const Account = () => {
  const [activeButton, setActiveButton] = useState("Profile");

  const renderComponent = () => {
    switch (activeButton) {
      case "Profile":
        return <Profile />;
      case "Address":
        return <Address />;
      case "Emergency":
        return;
      case "More":
        return;
    }
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#f1f6f7",
          marginX: "15px",
          marginTop: "15px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "15px",
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
            onClick={() => setActiveButton("Profile")}
          >
            Profile
          </Button>
          <Button
            sx={{
              textTransform: "none",
              paddingX: "20px",
              color: "black",
              fontWeight: "700",
            }}
            onClick={() => setActiveButton("Address")}
          >
            Address
          </Button>
          <Button
            sx={{
              textTransform: "none",
              paddingX: "20px",
              color: "black",
              fontWeight: "700",
            }}
            onClick={() => setActiveButton("Emergency")}
          >
            Emergency Contact
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
        {renderComponent()}
      </Box>
    </div>
  );
};

export default Account;
