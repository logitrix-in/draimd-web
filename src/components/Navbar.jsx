import React, { useState } from "react";
import NavIcon from "../assets/navicon.png";
import { Box, IconButton, Typography, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { navLinks } from "../constants/index";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [openSubmenu1, setOpenSubmenu1] = useState(null);
  const [openSubmenu2, setOpenSubmenu2] = useState(null);

  const toggleSubmenu1 = (index) => {
    setOpenSubmenu1(openSubmenu1 === index ? null : index);
    setOpenSubmenu2(null);
  };

  const toggleSubmenu2 = (index) => {
    setOpenSubmenu2(openSubmenu2 === index ? null : index);
    console.log(openSubmenu2);
  };

  return (
    <Box
      sx={{
        overflowY: "scroll",
        padding: "10px",
        width: "300px",
        height: "100vh",
        backgroundColor: "#f1f6f7",
        position: "fixed",
        display:"flex",
        flexDirection:"column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingX: "10px",
          paddingY: "5px",
          alignItems: "center",
          border: "0.5px solid",
          borderColor: "#8e8e8e",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <Box sx={{ paddingRight: "30px" }}>
          <img src={NavIcon} alt="navicon" height={"50px"} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "800" }}>
              Dr AI
            </Typography>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "800", color: "#0db2b2" }}
            >
              MBBS
            </Typography>
          </Box>

          <Box>
            <Typography sx={{ fontSize: "12px", color: "#8e8e8e" }}>
              Standard Plan
            </Typography>
          </Box>
        </Box>

        <Box flexGrow={1} />

        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </Box>

      <Box sx={{ marginTop: "10px", display: "flex", flexDirection:"column", flexGrow:"1" }}>
        {navLinks.map((link, index) => (
          <Box key={index} sx={{ paddingX: "10px" }}>
            <Button
              sx={{ textTransform: "none", width: "100%" }}
              onClick={() => toggleSubmenu1(index)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  padding: "2px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  borderColor: "#f1f6f7",
                }}
              >
                <Icon icon={link.icon} color="#8e8e8e" height={"25px"} />

                <Typography
                  sx={{
                    color: "#8e8e8e",
                    paddingLeft: "20px",
                    fontSize: "15px",
                  }}
                >
                  {link.name}
                </Typography>
              </Box>
            </Button>

            {link.dropdown && openSubmenu1 === index && (
              <Box
                sx={{
                  marginTop: "10px",
                  border: "0.25px solid",
                  borderColor: "#5dade2",
                  borderRadius: "10px",
                }}
              >
                {link.submenu.map((sublink, subindex) => (
                  <Box key={subindex}>
                    <Button
                      sx={{
                        textTransform: "none",
                        width: "100%",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                      onClick={() => toggleSubmenu2(subindex)}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          paddingLeft: "20px",
                          paddingY: "5px",
                          width: "100%",
                          borderRadius: "10px",
                          cursor: "pointer",
                        }}
                      >
                        <Icon
                          icon={sublink.icon}
                          color="#8e8e8e"
                          height={"20px"}
                        />
                        <Typography
                          sx={{
                            color: "#8e8e8e",
                            paddingLeft: "15px",
                            fontSize: "15px",
                          }}
                        >
                          {sublink.name}
                        </Typography>
                      </Box>
                    </Button>

                    {sublink.dropdown && openSubmenu2 === subindex && (
                      <Box
                        sx={{
                          margin: "5px",
                          border: "0.25px solid",
                          borderColor: "#5dade2",
                          borderRadius: "10px",
                        }}
                      >
                        {sublink.submenu2.map((sublink2, index) => (
                          <Button
                            sx={{
                              textTransform: "none",
                              width: "100%",
                              display: "flex",
                              justifyContent: "flex-start",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                paddingLeft: "30px",
                                paddingY: "5px",
                                width: "100%",
                                borderRadius: "10px",
                                cursor: "pointer",
                              }}
                            >
                              <Icon
                                icon={sublink2.icon}
                                color="#8e8e8e"
                                height={"20px"}
                              />
                              <Typography
                                sx={{
                                  color: "#8e8e8e",
                                  paddingLeft: "15px",
                                  fontSize: "15px",
                                }}
                              >
                                {sublink2.name}
                              </Typography>
                            </Box>
                          </Button>
                        ))}
                      </Box>
                    )}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>

      <Button
        sx={{
          width: "100%",
          display: "fixed",
          textTransform: "none",
          fontWeight: "800",
          color: "white",
          backgroundColor: "#0db2b2",
          bottom: "15px"
        }}
      >
        New Appointment{" "}
      </Button>
    </Box>
  );
};

export default Navbar;
