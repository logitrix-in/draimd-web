import React from "react";
import ProfileCard from "../components/HomePage/ProfileCard";
import Navbar from "../components/Navbar";
import { Box, Typography, IconButton } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NavigationButtons from "../components/HomePage/NavigationButtons";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useMediaQuery } from "@mui/material";

const HomePage = () => {
  const isTablet = useMediaQuery("(max-width: 1100px)");
  const isSmallLaptop = useMediaQuery(
    "(min-width: 1100px) and (max-width: 1440px)"
  );

  return (
    <Box sx={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Box sx={{ display: "flex" }}>
        <Navbar />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: "1",
            marginLeft: isTablet ? "250px" : isSmallLaptop ? "250px" : "300px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "50px",
              marginX: "30px",
              marginY: "10px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "800", fontSize: "30px" }}>
              Profile
            </Typography>

            <Box sx={{ display: "flex", gap: "20px", flexDirection: "row" }}>
              <IconButton sx={{ backgroundColor: "#dbf4f4" }}>
                <CalendarMonthIcon sx={{ color: "#0db2b2" }} />
              </IconButton>

              <IconButton sx={{ backgroundColor: "#dbf4f4" }}>
                <NotificationsIcon sx={{ color: "#0db2b2" }} />
              </IconButton>
            </Box>
          </Box>

          <ProfileCard />

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <NavigationButtons />
            </Box>

            <Box
              sx={{
                flexGrow: "1",
                display: isTablet ? "none" : isSmallLaptop ? "none" : "flex",
                flexDirection: "column",
                width: "400px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "800",
                  fontSize: "20px",
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
                  marginRight: "10px",
                  marginY: "20px",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
