import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Person from "../../assets/person.png";

const ProfileCard = () => {
  return (
    <div>
      <Box
        sx={{
          marginX: "15px",
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            padding: "10px",
            display: "flex",
            height: "150px",
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
              Spandan Mozumder
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
                  123235
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
                  90738872870
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
                  12345-674546
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
                  Male
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
                  O+
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
                  12345-674546
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
                  23-03-2003
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginX: "10px",
                }}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    border: "1px solid",
                    borderColor: "#0db2b2",
                    backgroundColor: "#0db2b2",
                    color: "white",
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
                  }}
                >
                  Book An Appointment
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProfileCard;
