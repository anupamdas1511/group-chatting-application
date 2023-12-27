import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { blueGrey } from "@mui/material/colors";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";
import { useCallback } from "react";
import { useEffect } from "react";

const SingleContact = ({ icon, name, isGroup }) => {
  const { currentReceiver, setCurrentReceiver } = useContext(MessageContext);
  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setCurrentReceiver(null);
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  const handleClick = () => {
    if (isGroup) {
      setCurrentReceiver("Group Chats");
    } else {
      setCurrentReceiver(name);
    }
  };

  return (
    <Stack
      direction="row"
      width="100%"
      height="70px"
      justifyContent="flex-start"
      alignItems="center"
      borderBottom={`.5px solid ${blueGrey[700]}`}
      paddingInlineStart={2}
      onClick={handleClick}
      sx={{
        cursor: "pointer",
        backgroundColor: blueGrey[900],
        ":hover": {
          backgroundColor: blueGrey[800],
        },
      }}
    >
      <Avatar src={<PersonIcon />} />
      <Typography paddingInlineStart={2} fontSize={20} fontWeight="bold">
        {name}
      </Typography>
    </Stack>
  );
};

export default SingleContact;
