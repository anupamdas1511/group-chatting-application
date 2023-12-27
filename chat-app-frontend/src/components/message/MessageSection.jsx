import { Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import DefaultMessageArea from "./messages/DefaultMessageArea";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { useEffect } from "react";

const MessageSection = () => {
  const { currentReceiver, privateChats, publicChats } =
    useContext(MessageContext);

  useEffect(() => {
    console.log(currentReceiver); 
    console.log(publicChats); 
  }, [currentReceiver, privateChats, publicChats]);

  const currentReceiverMessages = currentReceiver
    ? currentReceiver === "Group Chats"
      ? publicChats
      : privateChats && [...privateChats.get(currentReceiver)]
    : [];

  return (
    <Stack
      height="auto"
      flex="1 1 auto"
      direction="column"
      overflow="auto"
      backgroundColor={grey[900]}
    >
      {currentReceiver ? (
        currentReceiverMessages.map((element) => element)
      ) : (
        <DefaultMessageArea />
      )}
    </Stack>
  );
};

export default MessageSection;
