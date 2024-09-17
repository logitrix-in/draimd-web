import React, { useContext, useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Person from "../../assets/person.png";
import { Context } from "../../utils/Context";
import axios from "axios";
import { useMediaQuery } from "@mui/material";

const ProfileCard = () => {
  const isTablet = useMediaQuery("(max-width: 1100px)");

  const [patientId, setPatientId] = useState(null);
  const [patientDetails, setPatientDetails] = useState({});

  const fetchPatientId = async () => {
    try {
      const email = localStorage.getItem("userEmail");

      if (!email) {
        console.error("User email not found in Local Storage");
        return;
      }

      const response = await axios.get("http://127.0.0.1:8081/api/current", {
        params: {
          email: email,
        },
      });

      const patientId = response.data.patient_id;
      localStorage.setItem("patientId", patientId);
      setPatientId(patientId);

      console.log("Patient ID fetched and stored:", patientId);
    } catch (error) {
      console.error(
        "Data fetch failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const fetchPatientDetails = async (patientId) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8081/api/profile/personal",
        {
          params: {
            patient_id: patientId,
          },
        }
      );
      const profileData = response.data.profile;
      localStorage.setItem("patientDetails", JSON.stringify(profileData));
      setPatientDetails(profileData);

      console.log("Patient details fetched and stored:", profileData);
    } catch (error) {
      console.error(
        "Data fetch failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const fetchData = async () => {
    await fetchPatientId();

    const storedPatientId = localStorage.getItem("patientId");

    if (storedPatientId) {
      await fetchPatientDetails(storedPatientId);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        marginX: "15px",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          padding: "10px",
          display: "flex",
          flexDisplay: "row",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={Person} alt="Person" height={"120px"} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#0db2b2",
              fontWeight: "800",
              fontSize: "20px",
              paddingBottom: "5px",
            }}
          >
            {patientDetails.first_name +
              " " +
              patientDetails.middle_name +
              " " +
              patientDetails.last_name}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingX: "5px",
                  paddingY: "1px",
                  fontSize: "13px",
                }}
              >
                UHID:
              </Typography>
              <Typography sx={{ fontSize: "11px", paddingX: "5px" }}>
                {patientId}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingX: "5px",
                  paddingY: "1px",
                  fontSize: "13px",
                }}
              >
                Phone No:
              </Typography>
              <Typography sx={{ fontSize: "11px", paddingX: "5px" }}>
                {patientDetails.mobile}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingX: "5px",
                  paddingY: "1px",
                  fontSize: "13px",
                }}
              >
                Patient ID:
              </Typography>
              <Typography
                sx={{ fontSize: "11px", paddingX: "5px", paddingY: "1px" }}
              >
                {patientId}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingX: "5px",
                  paddingY: "1px",
                  fontSize: "13px",
                }}
              >
                Gender
              </Typography>
              <Typography
                sx={{ fontSize: "11px", paddingX: "5px", paddingY: "1px" }}
              >
                {patientDetails.gender}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingX: "5px",
                  paddingY: "1px",
                  fontSize: "13px",
                }}
              >
                Age:
              </Typography>
              <Typography
                sx={{ fontSize: "11px", paddingX: "5px", paddingY: "1px" }}
              >
                21
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingX: "5px",
                  paddingY: "1px",
                  fontSize: "13px",
                }}
              >
                Blood Group
              </Typography>
              <Typography sx={{ fontSize: "11px", paddingX: "5px" }}>
                {patientDetails.blood_group}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingX: "5px",
                  paddingY: "1px",
                  fontSize: "13px",
                }}
              >
                Email:
              </Typography>
              <Typography
                sx={{ fontSize: "11px", paddingX: "5px", paddingY: "1px" }}
              >
                {patientDetails.email}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingX: "5px",
                  paddingY: "1px",
                  fontSize: "13px",
                }}
              >
                DOB:
              </Typography>
              <Typography
                sx={{ fontSize: "11px", paddingX: "5px", paddingY: "1px" }}
              >
                {patientDetails.dob}
              </Typography>
            </Box>

            <Box
              sx={{
                display: isTablet ? "none" : "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginX: "10px",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  border: "1px solid #0db2b2",
                  borderColor: "#0db2b2",
                  backgroundColor: "#0db2b2",
                  color: "white",
                  transition: "0.3s ease-in-out",
                  "&:hover": { backgroundColor: "white", color: "#0db2b2" },
                  fontSize: "14px",
                }}
              >
                Talk to DR. AIMDS
              </Button>
              <Button
                sx={{
                  textTranform: "none",
                  border: "1px solid",
                  borderColor: "black",
                  color: "black",
                  backgroundColor: "white",
                  transition: "0.3s ease-in-out",
                  fontSize: "14px",
                }}
              >
                Book An Appointment
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          marginTop: "-10px",
          marginBottom: "10px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            display: isTablet ? "flex" : "none",
            textTransform: "none",
            border: "1px solid #0db2b2",
            borderColor: "#0db2b2",
            backgroundColor: "#0db2b2",
            color: "white",
            transition: "0.3s ease-in-out",
            "&:hover": { backgroundColor: "white", color: "#0db2b2" },
            fontSize: "12px",
          }}
        >
          Talk to DR. AIMDS
        </Button>
        <Button
          sx={{
            display: isTablet ? "flex" : "none",
            textTranform: "none",
            border: "1px solid",
            borderColor: "black",
            color: "black",
            backgroundColor: "white",
            transition: "0.3s ease-in-out",
            fontSize: "12px",
          }}
        >
          Book An Appointment
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileCard;
