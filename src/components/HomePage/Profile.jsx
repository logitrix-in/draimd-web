import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const patientId = localStorage.getItem("patientId");

    const fetchProfile = async () => {
      try {
        if (patientId) {
          const response = await axios.get(
            "http://127.0.0.1:8081/api/profile/members/all",
            {
              params: {
                added_by: patientId,
              },
            }
          );
          const profileData = response.data.profile[0];
          localStorage.setItem("patientProfile", JSON.stringify(profileData));
          setProfile(profileData);
          console.log(profileData);
        } else {
          console.error("Patient ID not found in Local Storage");
        }
      } catch (error) {
        console.error(
          "Failed to fetch address:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchProfile();
  }, []);

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
          {profile.first_name +
            " " +
            profile.middle_name +
            " " +
            profile.last_name}
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
                Date if Birth
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {profile.dob}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Gender
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {profile.gender}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Blood Group
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {profile.blood_group}
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
                Occupation
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {profile.occupation}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Email
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {profile.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{ fontWeight: "600", fontSize: "14px" }}
              ></Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              ></Typography>
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
        <Button
          sx={{
            textTransform: "none",
            color: "black",
            fontWeight: "600",
            border: "0.5px solid black",
            borderRadius: "5px",
          }}
        >
          <AddIcon /> Add Another Address
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
