import React from "react";
import Aimd from "../../assets/aimd.png";
import Appointment from "../../assets/appointment.png";
import Homecare from "../../assets/homecare.png";
import Mental from "../../assets/mental.png";
import Nutritionist from "../../assets/nutritionist.png";
import Pregnancy from "../../assets/pregnancy.png";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  CardActions,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import ChatbotButton from "../ChatbotButton";

import { Link } from "react-router-dom";

const CardDisplays = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#f1f6f7",
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
        }}
      >
        {/* first card row */}
        <Box
          sx={{
            display: "flex",
            paddingX: "20px",
            paddingY: "10px",
            justifyContent: "space-between",
          }}
        >
          {/* talk to dr aimd */}
          <Card
            sx={{
              width: "29%",
              borderRadius: "10px",
              border: "1.5px solid",
              borderColor: "#7ebae2",
              cursor: "pointer",
              transition: "0.3s ease-in-out",
              fontWeight: "800",
              color: "black",
              height: "165px",
            }}
          >
            {/* linking to the chatbot page */}
            <Link to={"/login"} style={{ textDecoration: "none", width: "auto" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to right top, #068080, #359c9c, #54b9b9, #72d7d6, #8ff5f5)",
                    color: "white",
                  },
                }}
              >
                <img src={Aimd} alt="Aimd" style={{ height: "70px" }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: "800" }}>
                    Talk to Dr AIMD
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Your personal & smart AI
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    doctor assistant
                  </Typography>
                </Box>
              </CardContent>
            </Link>
          </Card>
          {/* book an appointment */}
          <Card
            sx={{
              width: "29%",
              borderRadius: "10px",
              border: "1.5px solid",
              borderColor: "#7ebae2",
              cursor: "pointer",
              height: "165px",
            }}
          >
            <Link to={"/login"} style={{ textDecoration: "none", width: "auto" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to right top, #068080, #359c9c, #54b9b9, #72d7d6, #8ff5f5)",
                    color: "white",
                  },
                }}
              >
                <img
                  src={Appointment}
                  alt="Appointment"
                  style={{ height: "70px" }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: "800" }}>
                    Book an Appointment
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Video or Physical Consultation
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    with a specialist doctor
                  </Typography>
                </Box>
              </CardContent>
            </Link>
          </Card>
          {/* mental health */}
          <Card
            sx={{
              width: "29%",
              borderRadius: "10px",
              border: "1.5px solid",
              borderColor: "#7ebae2",
              cursor: "pointer",
              height: "165px",
            }}
          >
            <Link to={"/login"} style={{ textDecoration: "none", width: "auto" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to right top, #068080, #359c9c, #54b9b9, #72d7d6, #8ff5f5)",
                    color: "white",
                  },
                }}
              >
                <img src={Mental} alt="Mental" style={{ height: "70px" }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: "800" }}>
                    Mental Health
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Consult a Psychiatrist / Psychologist
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    for your mentail wellbeing
                  </Typography>
                </Box>
              </CardContent>
            </Link>
          </Card>
        </Box>

        {/* second card row */}
        <Box
          sx={{
            display: "flex",
            paddingX: "20px",
            justifyContent: "space-between",
          }}
        >
          {/* pregnancy support */}
          <Card
            sx={{
              width: "29%",
              borderRadius: "10px",
              border: "1.5px solid",
              borderColor: "#7ebae2",
              cursor: "pointer",
              height: "170px",
            }}
          >
            <Link to={"/login"} style={{ textDecoration: "none", width: "auto" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to right top, #068080, #359c9c, #54b9b9, #72d7d6, #8ff5f5)",
                    color: "white",
                  },
                }}
              >
                <img
                  src={Pregnancy}
                  alt="Pregrancy"
                  style={{ height: "65px" }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: "800" }}>
                    Pregnancy Support
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Consult a Gyneocologist for
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    your Pre, Post & In-between
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    pregnancy support
                  </Typography>
                </Box>
              </CardContent>
            </Link>
          </Card>
          {/* home based care */}
          <Card
            sx={{
              width: "29%",
              borderRadius: "10px",
              border: "1.5px solid",
              borderColor: "#7ebae2",
              cursor: "pointer",
              height: "170px",
            }}
          >
            <Link to={"/login"} style={{ textDecoration: "none", width: "auto" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to right top, #068080, #359c9c, #54b9b9, #72d7d6, #8ff5f5)",
                    color: "white",
                  },
                }}
              >
                <img src={Homecare} alt="Homecare" style={{ height: "65px" }} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: "800" }}>
                    Home Based Care
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Home visit for elderly, bed ridden
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    & post operative patient by a team
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    of doctors & nurses
                  </Typography>
                </Box>
              </CardContent>
            </Link>
          </Card>
          {/* dietitian and nutritionist */}
          <Card
            sx={{
              width: "29%",
              borderRadius: "10px",
              border: "1.5px solid",
              borderColor: "#7ebae2",
              cursor: "pointer",
              height: "170px",
            }}
          >
            <Link to={"/login"} style={{ textDecoration: "none", width: "auto" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to right top, #068080, #359c9c, #54b9b9, #72d7d6, #8ff5f5)",
                    color: "white",
                  },
                }}
              >
                <img
                  src={Nutritionist}
                  alt="Nutritionist"
                  style={{ height: "70px" }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", fontWeight: "800" }}>
                    Dietitian & Nutritionist
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    Get your personalised diet
                  </Typography>
                  <Typography sx={{ fontSize: "11px" }}>
                    chart to improve your health
                  </Typography>
                </Box>
              </CardContent>
            </Link>
          </Card>
        </Box>

        {/* buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: "10px",
            paddingTop: "20px",
            paddingBottom: "10px",
          }}
        >
          {/* navigation buttons */}
          <Box sx={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "800",
                color: "black",
                fontSize: "16px",
                transition: "0.3 ease-in-out",
                "&:hover": {
                  backgroundColor: "#dbf4f4",
                },
              }}
            >
              Services
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "800",
                color: "black",
                fontSize: "16px",
                transition: "0.3 ease-in-out",
                "&:hover": {
                  backgroundColor: "#dbf4f4",
                },
              }}
            >
              About Us
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "800",
                color: "black",
                fontSize: "16px",
                transition: "0.3 ease-in-out",
                "&:hover": {
                  backgroundColor: "#dbf4f4",
                },
              }}
            >
              Team
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "800",
                color: "black",
                fontSize: "16px",
                transition: "0.3 ease-in-out",
                "&:hover": {
                  backgroundColor: "#dbf4f4",
                },
              }}
            >
              Contact Us
            </Button>
            <Button
              sx={{
                textTransform: "none",
                fontWeight: "800",
                color: "black",
                fontSize: "16px",
                transition: "0.3 ease-in-out",
                "&:hover": {
                  backgroundColor: "#dbf4f4",
                },
              }}
            >
              Terms & Conditions
            </Button>
          </Box>
          {/* social media icons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ color: "black" }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <XIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* chatbot button */}
      <ChatbotButton />
    </Box>
  );
};

export default CardDisplays;
