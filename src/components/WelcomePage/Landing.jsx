import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField,
  Divider,
  IconButton,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CardDisplays from "../WelcomePage/CardDisplaysWelcome";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const PageTop = () => {
  const isTablet = useMediaQuery("(max-width: 1100px)");
  const isSmallLaptop = useMediaQuery(
    "(min-width: 1100px) and (max-width: 1440px)"
  );

  const navigate = useNavigate();

  const [language, setLanguage] = React.useState("english");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <Box
      sx={{
        marginLeft: isTablet ? "50px" : isSmallLaptop ? "100px" : "200px",
        marginRight: isTablet ? "50px" : isSmallLaptop ? "100px" : "200px",
        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        {/* welcome message */}
        <Typography
          sx={{ display: "flex", fontSize: "30px", fontWeight: "900" }}
        >
          Welcome{" "}
          <Typography
            sx={{
              display: "flex",
              paddingLeft: "30px",
              fontSize: "30px",
              fontWeight: "900",
              color: "#0db2b2",
            }}
          >
            User !
          </Typography>
        </Typography>
        {/* top buttons */}
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#78e57c",
              textTransform: "none",
              color: "white",
              paddingX: "20px",
              transition: "0.3s ease-in-out",
              border: "1px solid",
              borderColor: "#78e57c",
              "&:hover": {
                color: "#78e57c",
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "#78e57c",
              },
            }}
          >
            <Box sx={{ display: "flex", paddingRight: "10px" }}>
              <AdbIcon />
            </Box>
            Download App
          </Button>
          {/* language selector */}
          <FormControl sx={{ width: "80px", transition: "0.3s ease-in-out" }}>
            <InputLabel id="demo-simple-select-label">Lang</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={language}
              label="Language"
              onChange={handleChange}
            >
              <MenuItem value="english">EN</MenuItem>
              <MenuItem value="hindi">HN</MenuItem>
              <MenuItem value="bengali">BN</MenuItem>
              <MenuItem value="sanskrit">SN</MenuItem>
            </Select>
          </FormControl>

          <Button
            sx={{
              backgroundColor: "#0db2b2",
              textTransform: "none",
              color: "white",
              paddingX: "20px",
              transition: "0.3s ease-in-out",
              border: "1px solid",
              borderColor: "#0db2b2",
              "&:hover": {
                color: "#0db2b2",
                backgroundColor: "white",
                border: "1px solid",
                borderColor: "#0db2b2",
              },
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            sx={{
              backgroundColor: "#dbf4f4",
              color: "black",
              textTransform: "none",
              paddingX: "20px",
              transition: "0.3s ease-in-out",
              border: "1px solid #dbf4f4",
              borderColor: "#dbf4f4",
              "&:hover": {
                backgroundColor: "white",
                borderColor: "#0db2b2",
                color: "#0db2b2",
              },
            }}
          >
            Signup
          </Button>

          <IconButton
            sx={{
              backgroundColor: "#dbf4f4",
              border: "1px solid #dbf4f4",
              transition: "0.3s ease-in-out",
              "&:hover": { backgroundColor: "white", borderColor: "#0db2b2" },
            }}
          >
            <NotificationsIcon sx={{ color: "#0db2b2" }} />
          </IconButton>
        </Box>
      </Box>

      {/* location and search input */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "2px solid",
          borderColor: "#7ebae2",
          width: "full",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", paddingX: "10px", width: "50px" }}>
          <LocationOnOutlinedIcon />
        </Box>
        <Typography sx={{ width: "250px" }}>Kolkata, West Bengal</Typography>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ border: "1px solid", borderColor: "#7ebae2" }}
        />

        <TextField
          size="small"
          placeholder="Search"
          variant="outlined"
          InputProps={{
            fontSize: "0.9rem",
          }}
          sx={{
            width: "100%",
            marginLeft: "20px",
            display: "flex",
            border: "1px solid white",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          }}
        />
      </Box>

      {/* banner area */}
      <Box
        sx={{
          marginTop: "10px",
          border: "1px solid",
          borderColor: "#899faf",
          height: "150px",
          borderRadius: "10px",
        }}
      ></Box>

      <Box sx={{ marginTop: "10px", height: "100px" }}>
        <CardDisplays />
      </Box>
    </Box>
  );
};

export default PageTop;
