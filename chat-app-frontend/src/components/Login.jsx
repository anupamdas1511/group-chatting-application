import {
  Button,
  Container,
  FormControl,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { StompContext } from "../context/StompContext";
import ReceiveMessage from './message/messages/ReceiveMessage'
import SockJS from "sockjs-client";
import { over } from "stompjs";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../context/MessageContext";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const { setUser, user } = useContext(UserContext);
  const { privateChats, setPrivateChats, publicChats, setPublicChats } = useContext(MessageContext);
  const { stompClient, setStompClient } = useContext(StompContext);

  const connect = () => {
    try {
      let Sock = new SockJS("http://localhost:8081/websocket");
      setStompClient((prev) => over(Sock));
      console.log(over(Sock));
    } catch (error) {
      console.error("Connection error occurred", error);
    }
  };

  useEffect(() => {
    console.log(stompClient);
    if (stompClient) {
      stompClient.connect({}, onConnected, onError);
      navigate("/");
    }
  }, [stompClient]);

  const onConnected = () => {
    console.log("Connecting User...");
    stompClient.subscribe("/chatroom/public", onMessageReceived); // what to do when a message is received in a chatroom
    stompClient.subscribe(
      "/user/" + user.name + "/private",
      onPrivateMessageReceived
    ); // when message is received to a private user

    joinUser();
  };

  const joinUser = () => {
    console.log("Joining User...");
    let chatMessage = {
      senderName: name,
      status: "JOIN",
    };
    stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
  };

  const onMessageReceived = (payload) => {
    console.log(payload);
    let payloadData = JSON.parse(payload.body);
    let senderName = payloadData.senderName;
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.has(senderName)) {
          privateChats.set(senderName, []);
          setPrivateChats(new Map(privateChats));
          console.log(privateChats);
        }
        break;
      case "MESSAGE":
        if (senderName !== name) {
          let newMessage = (
            <ReceiveMessage
              isGroup
              name={senderName}
              content={payloadData.content}
            />
          )
  
          setPublicChats(prev => {
            return [...prev, newMessage]
          })
        }
        break;
    }
  };

  const onPrivateMessageReceived = (payload) => {
    let payloadData = JSON.parse(payload.body);
    let newMessage = (
      <ReceiveMessage
        isGroup
        name={payloadData.senderName}
        content={payloadData.content}
      />
    );

    let senderName = payloadData.senderName;

    if (privateChats.has(senderName)) {
      privateChats.get(senderName).push(newMessage);
    } else {
      let list = [];
      list.push(newMessage);
      privateChats.set(senderName, list);
    }
    setPrivateChats(new Map(privateChats));
  };

  const onError = (err) => {
    console.error(err);
  };

  const handleSubmit = (e) => {
    // Add the user to the database
    setUser({ ...user, name: name });
    console.log(privateChats);
    connect();
  };

  return (
    <div id="app-container">
      <Container
        sx={{
          height: "100%",
          display: "flex",
        }}
      >
        <Stack
          height="500px"
          width="500px"
          margin="auto"
          direction="column"
          alignItems="center"
        >
          <Typography fontSize={30} fontWeight="bold">
            Login
          </Typography>

          <FormControl
            variant="standard"
            fullWidth
            sx={{
              backgroundColor: grey[600],
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <OutlinedInput
              placeholder="Enter your name"
              color="primary"
              sx={{
                color: blue[50],
                fontWeight: "bold",
                "& fieldset": {
                  border: "none",
                },
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>

          <Button
            variant="contained"
            fullWidth
            sx={{
              marginTop: "10px",
              backgroundColor: grey[800],
              ":hover": {
                backgroundColor: grey[900],
              },
            }}
            onClick={handleSubmit}
          >
            Enter
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Login;
