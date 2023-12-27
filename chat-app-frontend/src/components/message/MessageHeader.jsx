import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { MessageContext } from "../../context/MessageContext";

const MessageHeader = () => {
  const { currentReceiver } = useContext(MessageContext);

  return (
    <Stack
      direction="row"
      width="100%"
      flex="0 1 70px"
      sx={{
        backgroundColor: blueGrey[700],
        borderInlineStart: "1px solid",
        borderInlineStartColor: blueGrey[400],
      }}
    >
      <Stack
        height="100%"
        width="20%"
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        paddingInlineStart={2}
      >
        <Avatar />
        <Typography paddingInlineStart={2} fontSize={20} fontWeight="bold">
          {currentReceiver}
        </Typography>
      </Stack>

      <Stack
        height="100%"
        width="80%"
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        paddingInlineEnd={2}
        gap={3.5}
      >
        <IconButton sx={{ color: "white" }} children={<SearchIcon />} />
        <IconButton sx={{ color: "white" }} children={<MoreVertIcon />} />
      </Stack>
    </Stack>
  );
};

export default MessageHeader;
