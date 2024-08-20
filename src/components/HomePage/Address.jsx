import React from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Address = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f6f7",
        borderRadius: "10px",
        paddingX: "20px",
        paddingTop: "5px",
        paddingBottom: "30px",
        display: "flex",
        flexDirection: "column",
        flexGrow: "1",
        height: "50vh",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          paddingY: "10px",
          paddingX: "20px",
        }}
      >
        <Typography sx={{ fontWeight: "700", fontSize: "17px" }}>
          Current Address
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingY: "10px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Address Line 1
              </Typography>
              <Typography sx={{ color: "#a3a3a3", fontSize: "13px" }}>
                some address, newtown, kolkata
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Address Line 2
              </Typography>
              <Typography sx={{ color: "#a3a3a3", fontSize: "13px" }}>
                some address, newtown, kolkata
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Nearby Landmark
              </Typography>
              <Typography sx={{ color: "#a3a3a3", fontSize: "13px" }}>
                Biswabangla Gate
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Pincode
              </Typography>
              <Typography sx={{ color: "#a3a3a3", fontSize: "13px" }}>
                700156
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Patient City / Town / Village / Police Station
              </Typography>
              <Typography sx={{ color: "#a3a3a3", fontSize: "13px" }}>
                Kolkata
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                State
              </Typography>
              <Typography sx={{ color: "#a3a3a3", fontSize: "13px" }}>
                West Bengal
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Country
              </Typography>
              <Typography sx={{ color: "#a3a3a3", fontSize: "13px" }}>
                India
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Type
              </Typography>
              <Typography sx={{ color: "#a3a3a3", fontSize: "13px" }}>
                Personal
              </Typography>
            </Box>

            <Button
              sx={{
                textTransform: "none",
                backgroundColor: "#0db2b2",
                color: "white",
                fontWeight: "600",
                paddingX: "50px",
              }}
            >
              Edit
            </Button>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "absolute", bottom: "50px", right: "370px" }}>
        <Button sx={{textTransform: "none", color: "black", fontWeight: "600", border: "0.5px solid black", borderRadius: "5px"}}>
          <AddIcon /> Add Another Address
        </Button>
      </Box>
    </Box>
  );
};

export default Address;
