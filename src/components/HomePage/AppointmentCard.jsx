import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const AppointmentCard = () => {
  const patientId = localStorage.getItem("patientId");
  const [appointments, setAppointments] = useState({});

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (patientId) {
          const response = await axios.get(
            "http://localhost:8002/appointments/patient-appointment/",
            {
              params: {
                patient_id: patientId,
              },
            }
          );

          const appointmentData = response.data;
          localStorage.setItem(
            "patientAppointments",
            JSON.stringify(appointmentData)
          );
          setAppointments(appointmentData);
          console.log("Appointments fetched and stored:", appointmentData);
        } else {
          console.log("Patient ID not found in Local Storage");
        }
      } catch (error) {
        console.error(
          "Failed to fetch appointments:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchAppointments();
  }, []);

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          paddingBottom: "5px",
          paddingTop: "5px",
        }}
      >
        <Typography
          sx={{ fontWeight: "600", fontSize: "15px", paddingLeft: "5px" }}
        >
          Dr Liam Hemsworth
        </Typography>
        <Typography
          sx={{ color: "#808080", fontSize: "15px", paddingLeft: "5px" }}
        >
          Cardiologist
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "15px", paddingLeft: "5px" }}
          >
            28th Jan 23
          </Typography>
          <Typography
            sx={{ color: "#808080", fontSize: "15px", paddingLeft: "5px" }}
          >
            12:00 PM
          </Typography>
        </Box>
        <Button
          sx={{ textTransform: "none", color: "#0db2b2", fontWeight: "600" }}
        >
          View
        </Button>
      </Box>
    </Box>
  );
};

export default AppointmentCard;
