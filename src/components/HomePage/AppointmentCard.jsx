import { Box, Typography, Button } from "@mui/material";
import React from "react";

const AppointmentCard = () => {
  return (
    <Box
      sx={{
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "#f3f3f3",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        height: "80px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px", paddingBottom: "5px", paddingTop: "5px" }}>
        <Typography sx={{fontWeight: "600", fontSize: "15px", paddingLeft: "5px"}}>Dr Liam Hemsworth</Typography>
        <Typography sx={{color: "#808080", fontSize: "15px", paddingLeft: "5px"}}>Cardiologist</Typography>
      </Box>

<Box sx={{display:"flex", flexDirection: "row", justifyContent:"space-between"}}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Typography sx={{fontWeight: "600", fontSize: "15px", paddingLeft: "5px"}}>28th Jan 23</Typography>
        <Typography sx={{color: "#808080", fontSize: "15px", paddingLeft: "5px"}}>12:00 PM</Typography>
      </Box>
      <Button sx={{textTransform: "none", color: "#0db2b2", fontWeight: "600"}}>View</Button>
      </Box>
    </Box>
  );
};

export default AppointmentCard;
