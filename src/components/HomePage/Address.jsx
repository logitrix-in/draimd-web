import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const Address = () => {
  const [address, setAddress] = useState({});
  const patientId = localStorage.getItem("patientId");

  useEffect(() => {
    const fetchAddress = async () => {
      try {
        if (patientId) {
          const response = await axios.get(
            "http://127.0.0.1:8081/api/profile/address",
            {
              params: {
                patient_id: patientId,
              },
            }
          );

          const fetchedAddress = response.data[0];
          localStorage.setItem(
            "patientAddress",
            JSON.stringify(fetchedAddress)
          );
          setAddress(fetchedAddress);
          console.log("Address fetched and stored:", fetchedAddress);
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

    if (patientId) {
      fetchAddress();
    } else {
      console.error("Patient ID not found in Local Storage");
    }
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
         {address.address_type} Address
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
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {address.pin_code}
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
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {address.patient_city_town}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                Country
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {address.country}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                State
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {address.state}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
                District
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3", fontSize: "13px" }}
              >
                {address.district}
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

export default Address;
