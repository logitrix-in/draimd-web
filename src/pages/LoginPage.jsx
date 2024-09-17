import React, { useContext, useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const LoginPage = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    localStorage.setItem("userEmail", userEmail);

    try {
      const response = await axios.get("http://127.0.0.1:8081/api/login", {
        params: {
          username: userEmail,
          password: userPassword,
        },
      });

      console.log("Login successful:", response.data);
      navigate("/home");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography sx={{ fontSize: isTablet?"50px":"70px" }}>
          Welcome <span style={{ color: "#0db2b2" }}>Back</span>
        </Typography>
        <Typography sx={{ fontSize:  isTablet?"30px":"50px" }}>
          <span style={{ color: "#0db2b2" }}>Log Into</span> You Account
        </Typography>
      </Box>

      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: isTablet ? "400px" : "500px",
            padding: "20px",
            boxShadow: 3,
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "300px",
          }}
        >
          <Typography variant="h5" textAlign="center">
            Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#0db2b2",
              transition: "0.3s ease-in-out",
              border: "1px solid #0db2b2",
              color: "white",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "white",
                color: "#0db2b2",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
