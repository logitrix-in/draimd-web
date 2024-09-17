import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import Aimdbig from "../../assets/aimdbig.png";
import ChatbotAimd from "../../assets/chatbot_aimd.png";
import ChatbotUser from "../../assets/chatbot_user.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import CachedIcon from "@mui/icons-material/Cached";
import { useMediaQuery } from "@mui/material";

const ChatModel = () => {
  const isTablet = useMediaQuery("(max-width: 1100px)");

  const [modelResponse, setModelResponse] = useState({});
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [options, setOptions] = useState([]);
  const [answerType, setAnswerType] = useState("text");
  const [patientId, setPatientId] = useState(null);
  const [finalMessage, setFinalMessage] = useState(null);

  const messageEndRef = useRef(null);

  let string = "Display Pdf";

  const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8081",
  });

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
      setPatientId(patientId);

      console.log("Patient ID fetched and stored:", patientId);

      await setSession(patientId);
    } catch (error) {
      console.error(
        "Data fetch failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const setSession = async (patientId) => {
    try {
      const response = await axiosInstance.post("/chatbot/set-session", {
        userID: patientId,
      });
      console.log("Response set session", response.data);

      if (response.status === 200) {
        console.log("Session set successfully, now starting chatbot");
        await startChatbot();
      }
    } catch (error) {
      console.error(
        "Data fetch failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const startChatbot = async () => {
    try {
      const response = await axiosInstance.get("/chatbot/start?input=hi");

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.data, sender: "bot" },
      ]);

      setModelResponse(response.data);
    } catch (error) {
      console.error(
        "Failed to start chatbot:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    fetchPatientId();
  }, []);

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setUserInput("");

    try {
      // const response1 = await axiosInstance.get(
      //   `/chatbot/start?input=${userInput}`
      // );

      // if (response1.data.type === "answer") {
      //   const response2 = await axiosInstance.get(
      //     `/chatbot/start?input=${userInput}`
      //   );

      //   setModelResponse(response2.data);

      //   const botMessage = { text: response2.data, sender: "bot" };

      //   setMessages((prevMessages) => [...prevMessages, botMessage]);
      // }

      let response;
      let responseDataType = "answer";

      while (responseDataType === "answer") {
        response = await axiosInstance.get(`/chatbot/start?input=${userInput}`);
        responseDataType = response.data.type;
      }

      setModelResponse(response.data);

      const botMessage = { text: response.data, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      const errorMessage = {
        text: "Failed to get response from chatbot.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  useEffect(() => {
    if (modelResponse.options) {
      setOptions(modelResponse.options);
    }

    if (modelResponse.answer_type) {
      setAnswerType(modelResponse.answer_type);
    }
  }, [modelResponse]);

  useEffect(() => {
    console.log("Messages updated:", messages);

    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setFinalMessage(messages[messages.length - 1]);
  }, [messages.length]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (answerType === "numeric") {
      if (/^\d{0,2}$/.test(value) && Number(value) <= 10) {
        setUserInput(value);
      }
    } else {
      setUserInput(value);
    }
  };

  const handleOptionClick = async (option) => {
    const userMessage = { text: option, sender: "user" };

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    setUserInput("");

    try {
      const response1 = await axiosInstance.get(
        `/chatbot/start?input=${option}`
      );

      if (response1.data.type === "answer") {
        const response2 = await axiosInstance.get(
          `/chatbot/start?input=${option}`
        );
        setModelResponse(response2.data);

        const botMessage = { text: response2.data, sender: "bot" };

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      const errorMessage = {
        text: "Failed to get response from chatbot.",
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const clearCookies = async () => {
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
      const cookieName = cookie.split("=")[0];
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });

    window.location.reload();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: "10px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        {/* sidebar navbar */}
        <Navbar />

        <Box
          sx={{
            width: "calc(100vw - 300px)",
            display: "flex",
            flexDirection: "column",
            marginLeft: "300px",
            height: "100vh",
            justifyContent: "space-between",
          }}
        >
          {messages.length > 1 ? null : (
            <Box
              sx={{
                position: "absolute",
                zIndex: "-1",
                display: "flex",
                justifyContent: "center",
                width: "calc(100vw - 300px)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "radial-gradient(circle, rgba(164,220,225,1) 0%, rgba(255,255,255,1) 29%)",
                  position: "absolute",
                  paddingTop: "100px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    fontSize: isTablet ? "25px" : "30px",
                    fontWeight: "900",
                    marginY: "20px",
                  }}
                >
                  Welcome{" "}
                  <Typography
                    sx={{
                      display: "flex",
                      paddingLeft: "30px",
                      fontSize: isTablet ? "25px" : "30px",
                      fontWeight: "900",
                      color: "#0db2b2",
                    }}
                  >
                    Talk to DrAIMD
                  </Typography>
                </Typography>

                <img
                  src={Aimdbig}
                  alt="Aimd"
                  style={{ width: isTablet ? "250px" : "300px" }}
                />

                <Typography
                  sx={{
                    fontSize: isTablet ? "14px" : "16px",
                    fontWeight: "900",
                    marginY: "10px",
                  }}
                >
                  Hello !
                </Typography>

                <Typography
                  sx={{
                    fontSize: isTablet ? "14px" : "16px",
                    fontWeight: "500",
                    marginY: "10px",
                  }}
                >
                  I'm DrAIMD, your personal and smart AI Doctor assist. I'hv
                  been trained by licensed doctors
                </Typography>
              </Box>
            </Box>
          )}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              height: "50px",
              marginX: "30px",
              marginY: "10px",
              alignItems: "center",
              justifyContent: "space-between",
              width: "calc(100vw - 350px)",
            }}
          >
            <Box sx={{ display: "flex", flexDiretion: "row" }}>
              <Box
                sx={{
                  border: "1px solid",
                  marginRight: "20px",
                  borderRadius: "5px",
                  borderColor: "#0db2b2",
                }}
              >
                <Link to="/home">
                  <IconButton>
                    <ArrowBackIosNewIcon />
                  </IconButton>
                </Link>
              </Box>
              <Typography sx={{ fontWeight: "800", fontSize: "30px" }}>
                Profile
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: "20px", flexDirection: "row" }}>
              <IconButton sx={{ backgroundColor: "#dbf4f4" }}>
                <CalendarMonthIcon sx={{ color: "#0db2b2" }} />
              </IconButton>

              <IconButton sx={{ backgroundColor: "#dbf4f4" }}>
                <NotificationsIcon sx={{ color: "#0db2b2" }} />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              flexGrow: "1",
            }}
          >
            <List
              sx={{
                flexGrow: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Box>
                {messages.map((message, index) => (
                  <ListItem key={index}>
                    {message.sender === "bot" ? (
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={ChatbotAimd}
                            alt="Aimd"
                            style={{ width: "35px", height: "35px" }}
                          />
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#0db2b2",
                            }}
                          >
                            Dr AiMD
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontWeight: "600", paddingX: "40px" }}
                        >
                          {message.text?.question
                            ? capitalizeFirstLetter(message.text.question)
                            : capitalizeFirstLetter(message.text.message)}
                        </Typography>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={ChatbotUser}
                            alt="User"
                            style={{ width: "35px", height: "35px" }}
                          />
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "600",
                              color: "#0db2b2",
                            }}
                          >
                            Dr AiMD
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontWeight: "600", paddingLeft: "40px" }}
                        >
                          {capitalizeFirstLetter(message.text)}
                        </Typography>
                      </Box>
                    )}
                  </ListItem>
                ))}
              </Box>
            </List>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "130px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: "5px",
              }}
            >
              {options && options.length > 0 ? (
                options.map((option, index) => (
                  <Button
                    key={index}
                    sx={{
                      border: "1px solid #0db2b2",
                      color: "#0db2b2",
                      margin: "5px",
                      borderRadius: "10px",
                    }}
                    onClick={() =>
                      handleOptionClick(capitalizeFirstLetter(option))
                    }
                  >
                    {capitalizeFirstLetter(option)}
                  </Button>
                ))
              ) : (
                <Box>
                  {finalMessage?.text?.message ? (
                    <Button
                      sx={{
                        border: "1px solid #0db2b2",
                        color: "#0db2b2",
                        margin: "5px",
                        borderRadius: "10px",
                        textTransform: "none",
                      }}
                      onClick={() => alert("No options available!")}
                    >
                      {capitalizeFirstLetter(string)}
                    </Button>
                  ) : null}
                </Box>
              )}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                paddingX: "80px",
                gap: "10px",
                paddingBottom: "30px",
              }}
            >
              {" "}
              <TextField
                id="outlined-basic"
                label="Type a message"
                variant="outlined"
                fullWidth
                size="small"
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
                disabled={answerType === "options"}
              />
              <Button
                sx={{
                  backgroundColor: "#0db2b2",
                  color: "white",
                  height: "100%",
                  border: "1px solid #0db2b2",
                  transition: "0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#0db2b2",
                  },
                }}
                onClick={handleSendMessage}
              >
                <SendIcon />
              </Button>
              <IconButton onClick={clearCookies}>
                <CachedIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatModel;
