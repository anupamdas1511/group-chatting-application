import { Box, Stack, TextField } from "@mui/material";
import React from "react";
import SingleContact from "./SingleContact";
import { blueGrey } from "@mui/material/colors";
import { useState } from "react";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

const ContactSection = () => {
  const [query, setQuery] = useState("");
  const { privateChats } = useContext(MessageContext);

  const handleSearch = (e) => {
    console.log(query);
    console.log(e.key);
  };

  const contactNames = privateChats ? [...privateChats.keys()] : [];

  return (
    <Box>
      <Box>
        <TextField
          placeholder="Search"
          onKeyDown={(e) => handleSearch(e)}
          onChange={(e) => setQuery(e.target.value)}
          sx={{
            width: "95%",
            margin: "10px",
            borderRadius: "25px",
            input: {
              color: "white",
              fontStyle: "italic",
            },
            backgroundColor: blueGrey[600],
            "& fieldset": {
              border: "none",
            },
          }}
        />
      </Box>
      <Stack direction="column">
        <SingleContact isGroup name="Group Chats" />

        {contactNames.map(
          (name) =>
            name !== "Group Chats" && <SingleContact key={name} name={name} />
        )}
      </Stack>
    </Box>
  );
};

export default ContactSection;
