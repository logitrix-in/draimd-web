import React from 'react'
import { Box, Button } from '@mui/material'
import Chatbot from '../assets/chatbot.png'

const ChatbotButton = () => {
  return (
    <Box sx={{position:"fixed", bottom: "30px", right: "30px", zIndex: "10"}}>
    <Box>
      <Button>
          <img src={Chatbot} alt="Chatbot" style={{ height: "50px" }} /> 
      </Button>
    </Box>
  </Box>
  )
}

export default ChatbotButton
