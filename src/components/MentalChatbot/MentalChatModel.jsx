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
import Navbar from "../../components/Navbar";
import CachedIcon from "@mui/icons-material/Cached";
import {useMediaQuery} from "@mui/material";

const MentalChatModel = () => {
  const isTablet = useMediaQuery("(max-width: 1100px)");

  const [input, setInput] = useState("");
  const [modelResponse, setModelResponse] = useState([]);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const socketRef = useRef(null);
  const [counter, setCounter] = useState(1);
  const [multiSelectOptions, setMultiSelectOptions] = useState([]);
  const [flag, setFlag] = useState(false);

  const messageEndRef = useRef(null);

  const startChatbot = () => {
    socketRef.current = new WebSocket("ws://127.0.0.1:8081/chatbot/mental");

    socketRef.current.onopen = () => {
      const initialMessage = {
        type: "question",
        run: 0,
      };

      socketRef.current.send(JSON.stringify(initialMessage));
      console.log("Websocket connected");
    };

    socketRef.current.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);

      setModelResponse(receivedData);

      if (receivedData.question) {
        const botMessage = { text: receivedData.question, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }

      if (receivedData.options) {
        setOptions(receivedData.options);
      }

      console.log("Received data: ", receivedData);
    };

    return () => {
      socketRef.current.close();
    };
  };

  useEffect(() => {
    startChatbot();
  }, []);

  const handleOptionClick = (option, index) => {
    setCounter(counter + 1);

    setOptions([]);

    const userMessage = { text: option, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const message = {
      type: "answer",
      run: counter - 1,
      option: index,
    };

    socketRef.current.send(JSON.stringify(message));

    socketRef.current.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);

      if (receivedData.message) {
        const followUpMessage = {
          type: "question",
          run: counter,
        };

        console.log("Counter:", counter);
        socketRef.current.send(JSON.stringify(followUpMessage));
        console.log("Received data: ", receivedData);

        if (receivedData.message === "Please answer the following questions") {
          const botMessage = { text: receivedData.message, sender: "bot" };
          setMessages((prevMessages) => [...prevMessages, botMessage]);

          handleCallApiAgain();
        }
      }

      if (receivedData.question) {
        setModelResponse(receivedData);

        if (receivedData.question) {
          const botMessage = { text: receivedData.question, sender: "bot" };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        }

        if (receivedData.options) {
          setOptions(receivedData.options);
        } else {
          setOptions([]);
        }

        console.log("Follow-up data: ", receivedData);
        console.log(messages);
        console.log(counter);
      }
    };
  };

  const handleCallApiAgain = () => {
    const followUpMessage = {
      type: "question",
      run: counter,
    };

    console.log("Counter:", counter);
    socketRef.current.send(JSON.stringify(followUpMessage));

    socketRef.current.onmessage = (event) => {
      const responseData = JSON.parse(event.data);

      if (responseData?.option) {
        setMultiSelectOptions(responseData.option);
      }
    };
  };

  useEffect(() => {
    console.log("Messages: ", messages);

    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const botRefresh = () => {
    setCounter(1);
    setMessages([]);
    setMultiSelectOptions([]);
    setFlag(false);
    setSelectedIndexes([]);
    setSelectedNames([]);
    startChatbot();
  };

  useEffect(() => {
    if (multiSelectOptions.length > 0) {
      setFlag(true);
    }
  }, [multiSelectOptions]);

  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const toggleSelection = (name, index) => {
    console.log("Option selected: ", name);
    console.log("Index: ", index);

    setSelectedNames((prevNames) => {
      if (prevNames.includes(name)) {
        return prevNames.filter((item) => item !== name);
      } else {
        return [...prevNames, name];
      }
    });

    setSelectedIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((item) => item !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const handleSendMessage = (indexes) => {
    console.log("Selected indexes: ", indexes);
    const concatenatedNames = capitalizeFirstLetter(selectedNames.join(", "));

    const userMessage = { text: concatenatedNames, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    const message = {
      type: "answer",
      run: 4,
      option: indexes,
    };

    socketRef.current.send(JSON.stringify(message));

    socketRef.current.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);

      console.log("Received data: ", receivedData);

      if (receivedData.disease) {
        const diseaseArray = capitalizeFirstLetter(
          receivedData.disease.join(", ")
        );
        const botMessage = { text: diseaseArray, sender: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);

        setMultiSelectOptions([]);
      }
    };
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
                    fontSize: isTablet?"25px":"30px",
                    fontWeight: "900",
                    marginY: "20px",
                  }}
                >
                  Welcome{" "}
                  <Typography
                    sx={{
                      display: "flex",
                      paddingLeft: "30px",
                      fontSize: isTablet?"25px":"30px",
                      fontWeight: "900",
                      color: "#0db2b2",
                    }}
                  >
                    Talk to DrAIMD
                  </Typography>
                </Typography>

                <img src={Aimdbig} alt="Aimd" style={{ width: isTablet?"250px":"300px" }} />

                <Typography
                  sx={{ fontSize: isTablet?"14px":"16px", fontWeight: "900", marginY: "10px" }}
                >
                  Hello !
                </Typography>

                <Typography
                  sx={{ fontSize: isTablet?"14px":"16px", fontWeight: "500", marginY: "10px" }}
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
                        {capitalizeFirstLetter(message.text)}
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
            </List>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "5px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {flag === false &&
                options.map((option, index) => (
                  <Button
                    key={index}
                    sx={{
                      border: "1px solid #0db2b2",
                      color: "#0db2b2",
                      margin: "5px",
                      borderRadius: "10px",
                      textTransform: "none",
                    }}
                    onClick={() => handleOptionClick(option.option, index)}
                  >
                    {capitalizeFirstLetter(option.option)}
                  </Button>
                ))}

              {flag === true &&
                multiSelectOptions.map((option, index) => (
                  <Button
                    key={index}
                    sx={{
                      border: "1px solid #0db2b2",
                      color: "#0db2b2",
                      paddingY: "5px",
                      margin: "5px",
                      borderRadius: "10px",
                      textTransform: "none",
                    }}
                    onClick={() => toggleSelection(option.APSName, index)}
                  >
                    {capitalizeFirstLetter(option.APSName)}
                  </Button>
                ))}
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
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={true}
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
                onClick={() => handleSendMessage(selectedIndexes)}
                disabled={selectedIndexes.length === 0}
              >
                <SendIcon />
              </Button>
              <IconButton onClick={botRefresh}>
                <CachedIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MentalChatModel;
