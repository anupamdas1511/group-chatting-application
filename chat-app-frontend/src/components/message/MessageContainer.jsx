import { Box } from "@mui/material";
import React from "react";
import MessageHeader from "./MessageHeader";
import MessageSection from "./MessageSection";
import MessageControls from "./MessageControls";

const MessageContainer = () => {
  return (
    <Box
      height="100%"
      width="70%"
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: "rgba(255, 255, 255)",
      }}
    >
      <MessageHeader />
      <MessageSection />
      <MessageControls />
    </Box>
  );
};

export default MessageContainer;
