import React, { useState } from "react";
import NavIcon from "../assets/navicon.png";
import { Box, IconButton, Typography, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { navLinks } from "../constants/index";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const isTablet = useMediaQuery("(max-width: 1100px)");
  const isSmallLaptop = useMediaQuery(
    "(min-width: 1100px) and (max-width: 1440px)"
  );
  const [openSubmenu1, setOpenSubmenu1] = useState(null);
  const [openSubmenu2, setOpenSubmenu2] = useState(null);

  // open/close submenu
  const toggleSubmenu1 = (index) => {
    setOpenSubmenu1(openSubmenu1 === index ? null : index);
    setOpenSubmenu2(null);
  };

  // open/close submenus of submenus
  const toggleSubmenu2 = (index) => {
    setOpenSubmenu2(openSubmenu2 === index ? null : index);
    console.log(openSubmenu2);
  };

  return (
    <Box
      sx={{
        overflowY: "scroll",
        padding: "10px",
        width: isTablet ? "250px" : isSmallLaptop ? "250px" : "300px",
        height: "100vh",
        backgroundColor: "#f1f6f7",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* dr aimbbs icon and plans */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingX: isTablet ? "5px" : isSmallLaptop ? "5px" : "10px",
          paddingY: "5px",
          alignItems: "center",
          border: "0.5px solid",
          borderColor: "#8e8e8e",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            paddingRight: isSmallLaptop ? "10px" : isTablet ? "10px" : "30px",
          }}
        >
          <img src={NavIcon} alt="navicon" height={"50px"} />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{
                fontSize: isSmallLaptop ? "15px" : isTablet ? "15px" : "18px",
                fontWeight: "800",
              }}
            >
              Dr AI
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallLaptop ? "15px" : isTablet ? "15px" : "18px",
                fontWeight: "800",
                color: "#0db2b2",
              }}
            >
              MBBS
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: isSmallLaptop ? "11px" : isTablet ? "11px" : "12px",
                color: "#8e8e8e",
              }}
            >
              Standard Plan
            </Typography>
          </Box>
        </Box>

        <Box flexGrow={1} />

        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </Box>

      {/* navbar links */}
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          flexGrow: "1",
        }}
      >
        {/* map over navlinks and renders them */}
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
                <Icon
                  icon={link.icon}
                  color="#8e8e8e"
                  height={isSmallLaptop ? "20px" : isTablet ? "20px" : "25px"}
                />

                <Typography
                  sx={{
                    color: "#8e8e8e",
                    paddingLeft: "20px",
                    fontSize: isSmallLaptop ? "14px" :isTablet ? "14px" : "15px",
                  }}
                >
                  {link.name}
                </Typography>
              </Box>
            </Button>

            {/* checks for dropdowns and whether particular submenu is clicked or not */}
            {link.dropdown && openSubmenu1 === index && (
              <Box
                sx={{
                  marginTop: "10px",
                  border: "0.25px solid",
                  borderColor: "#5dade2",
                  borderRadius: "10px",
                }}
              >
                {/* renders the submenu if it is present and clicked */}
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
                            fontSize: isSmallLaptop ? "13px" :isTablet ? "13px" : "15px",
                          }}
                        >
                          {sublink.name}
                        </Typography>
                      </Box>
                    </Button>

                    {/* checks for submenus of submenu and whether particular submenu is clicked or not */}
                    {sublink.dropdown && openSubmenu2 === subindex && (
                      <Box
                        sx={{
                          margin: "5px",
                          border: "0.25px solid",
                          borderColor: "#5dade2",
                          borderRadius: "10px",
                        }}
                      >
                        {/* renders the submenus of submenu if it is present and clicked */}
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
                                  fontSize: isSmallLaptop ? "13px" : isTablet ? "13px" : "15px",
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

      {/* new appointment button */}
      <Button
        sx={{
          width: "100%",
          display: "fixed",
          textTransform: "none",
          fontWeight: "800",
          color: "white",
          backgroundColor: "#0db2b2",
          bottom: "15px",
        }}
      >
        New Appointment{" "}
      </Button>
    </Box>
  );
};

export default Navbar;
