import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SendIcon from "@mui/icons-material/Send";
import { grey, blueGrey } from "@mui/material/colors";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { UserContext } from "../../context/UserContext";
import { StompContext } from "../../context/StompContext";
import SendMessage from "./messages/SendMessage";

const MessageControls = () => {
  const [messageInput, setMessageInput] = React.useState("");
  const {
    privateChats,
    setPrivateChats,
    publicChats,
    setPublicChats,
    currentReceiver,
  } = useContext(MessageContext);
  const { user } = useContext(UserContext);
  const { stompClient, setStompClient } = useContext(StompContext);

  const handleKeyEnter = (e) => {
    if (e.key === "Enter") {
      if (currentReceiver === "Group Chats") {
        handleGroupEnter();
      } else {
        handleEnter();
      }
      e.target.value = "";
    }
  };

  const handleEnter = () => {
    console.log("sending message...");
    let newMessage = (
      <SendMessage isGroup name={user.name} content={messageInput} />
    );
    sendMessage();

    setPrivateChats((prevChats) => {
      const updatedChats = new Map(prevChats);
      if (!updatedChats.has(currentReceiver)) {
        updatedChats.set(currentReceiver, []);
      }
      updatedChats.get(currentReceiver).push(newMessage);
      return updatedChats;
    });
    console.log(messageInput); 
    console.log(privateChats); 
  };

  const handleGroupEnter = () => {
    console.log("sending message...");
    let newMessage = (
      <SendMessage isGroup name={user.name} content={messageInput} />
    );
    sendMessage();

    setPublicChats((prevChats) => {
      const updatedChats = [...prevChats, newMessage];
      return updatedChats;
    });
    console.log(publicChats);
  };

  const sendMessage = () => {
    if (stompClient) {
      let chatMessage = {
        senderName: user.name,
        receiverName: currentReceiver !== "Group Chats" && currentReceiver,
        content: messageInput,
        status: "MESSAGE",
      };

      let sendUrl =
        currentReceiver !== "Group Chats"
          ? "/app/private-message"
          : "/app/message";
      stompClient.send(sendUrl, {}, JSON.stringify(chatMessage));
    }
  };

  return (
    <Box
      position="sticky"
      marginTop="auto"
      width="100%"
      height="80px"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: blueGrey[700],
      }}
    >
      <IconButton size="large">
        <AddIcon style={{ color: grey[300] }} />
      </IconButton>

      <FormControl
        fullWidth
        sx={{
          backgroundColor: blueGrey[600],
          borderRadius: "15px",
          border: "none",
        }}
      >
        <OutlinedInput
          placeholder="Type a message"
          sx={{
            color: "white",
            fontWeight: "bold",
            "& fieldset": { border: "none" },
          }}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => handleKeyEnter(e)}
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SentimentSatisfiedAltIcon style={{ color: grey[300] }} />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      {messageInput.length === 0 ? (
        <IconButton size="large">
          <KeyboardVoiceIcon style={{ color: grey[300] }} />
        </IconButton>
      ) : (
        <IconButton size="large" onClick={handleEnter}>
          <SendIcon style={{ color: grey[300] }} />
        </IconButton>
      )}
    </Box>
  );
};

export default MessageControls;
