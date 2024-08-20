import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#f1f6f7",
          margin: "15px",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "10px",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Typography>Dashboard</Typography>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Card>
              <CardContent>
                <Typography>Heart rate</Typography>
                <Typography>97</Typography>
                <Typography>bpm</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography>Blood Pressure</Typography>
                <Typography>120/80</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography>Temperature</Typography>
                <Typography>98.6</Typography>
                <Typography>F</Typography>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography>Oxygen Saturation</Typography>
                <Typography>95%</Typography>
              </CardContent>
            </Card>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ width: "50%" }}>

            </Box>
            <Box sx={{ width: "50%" }}>
                
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
