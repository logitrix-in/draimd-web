import React from "react";
import { Box, Typography } from "@mui/material";

const Notiification = () => {
  return (
    <div>
      <Box sx={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontWeight: "800",
            fontSize: "20px",
            marginX: "15px",
            marginTop: "15px",
            color: "#5dade2",
          }}
        >
          Timeline
        </Typography>

        <Box
          sx={{
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            marginX: "5px",
            marginY: "20px",
          }}
        >
        </Box>
      </Box>
    </div>
  );
};

export default Notiification;
