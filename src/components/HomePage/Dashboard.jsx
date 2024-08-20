import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import MedicationIcon from "@mui/icons-material/Medication";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AppointmentCard from "./AppointmentCard";
import PrescriptionCard from "./PrescriptionCard";
import HeartBeat from "../../assets/heartbeat.png";

const Dashboard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f1f6f7",
        margin: "15px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        height: "60vh",
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
        <Typography
          sx={{ fontWeight: "600", paddingLeft: "10px", fontSize: "17px" }}
        >
          Dashboard
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: "5px",
            paddingX: "10px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "6px",
              width: "20vw",
              backgroundColor: "#d0e0f4",
              paddingY: "5px",
              paddingX: "20px",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                Heart rate
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "end",
                }}
              >
                <Typography sx={{ fontSize: "40px", fontWeight: "800" }}>
                  97
                </Typography>
                <Typography>bpm</Typography>

                <Box sx={{ marginLeft: "10px" }}>
                  <img src={HeartBeat} alt="HeartBeat" width={170} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              borderRadius: "6px",
              backgroundColor: "#d7c0ca",
              paddingY: "5px",
              paddingX: "20px",
              height: "100%",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                Blood Pressure
              </Typography>
              <Typography sx={{ fontSize: "30px", fontWeight: "800" }}>
                120/80
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              borderRadius: "6px",
              backgroundColor: "#fbf0dc",
              paddingY: "5px",
              paddingX: "20px",
              height: "100%",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                Temperature
              </Typography>
              <Typography sx={{ fontSize: "30px", fontWeight: "800" }}>
                98.6 C
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              borderRadius: "6px",
              backgroundColor: "#b3f38d",
              paddingY: "5px",
              paddingX: "20px",
              height: "100%",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                Oxygen Saturation
              </Typography>
              <Typography sx={{ fontSize: "30px", fontWeight: "800" }}>
                95%
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", height: "40vh" }}>
          <Box
            sx={{
              width: "50%",
              flexDirection: "column",
              backgroundColor: "white",
              margin: "10px",
              borderRadius: "5px",
              paddingY: "5px",
              paddingX: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                }}
              >
                <Box sx={{ marginTop: "5px", paddingRight: "5px" }}>
                  <TodayIcon />
                </Box>
                Appointment
              </Typography>
              <button
                style={{
                  backgroundColor: "#0db2b2",
                  color: "white",
                  textTransform: "none",
                  fontWeight: "600",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Montserrat",
                }}
              >
                Book
              </button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
              <button
                style={{
                  backgroundColor: "white",
                  textTransform: "none",
                  fontWeight: "600",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "5px",
                  color: "#969696",
                  fontFamily: "Montserrat",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Today
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  textTransform: "none",
                  fontWeight: "600",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "5px",
                  color: "#969696",
                  fontFamily: "Montserrat",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Upcoming
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  textTransform: "none",
                  fontWeight: "600",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "5px",
                  color: "#969696",
                  fontFamily: "Montserrat",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Past
              </button>
            </Box>
            <Box sx={{ overflow: "scroll", height: "28vh" }}>
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
              <AppointmentCard />
            </Box>
          </Box>

          <Box
            sx={{
              width: "50%",
              flexDirection: "column",
              backgroundColor: "white",
              margin: "10px",
              borderRadius: "5px",
              paddingY: "5px",
              paddingX: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                }}
              >
                <Box sx={{ marginTop: "5px", paddingRight: "5px" }}>
                  <MedicationIcon />
                </Box>
                Prescriptions
              </Typography>
              <button
                style={{
                  backgroundColor: "white",
                  color: "#a3a3a3",
                  textTransform: "none",
                  fontWeight: "600",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontFamily: "Montserrat",
                  border: "1px solid #3f3f46",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Box sx={{ paddingRight: "5px" }}>
                  {" "}
                  <ScheduleIcon />{" "}
                </Box>
                23/02/2023 - 02/03/2023
              </button>
            </Box>
            <Box sx={{ overflow: "scroll", height: "31vh" }}>
              <PrescriptionCard />
              <PrescriptionCard />
              <PrescriptionCard />
              <PrescriptionCard />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
