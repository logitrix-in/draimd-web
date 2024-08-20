import React from 'react'
import { Box, Typography, Button } from "@mui/material";

const PrescriptionCard = () => {
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
    </Box>

<Box sx={{display:"flex", flexDirection: "row", justifyContent:"space-between"}}>
    <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
    <Typography sx={{color: "#808080", fontSize: "15px", paddingLeft: "5px"}}>12-02-2023</Typography>
    </Box>
    <Button sx={{textTransform: "none", color: "#0db2b2", fontWeight: "600"}}>View Prescription</Button>
    </Box>
  </Box>
  )
}

export default PrescriptionCard
