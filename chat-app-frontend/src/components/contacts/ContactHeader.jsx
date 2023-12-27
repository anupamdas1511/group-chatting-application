import { Avatar, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import GroupsIcon from "@mui/icons-material/Groups";
import { blueGrey } from "@mui/material/colors";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const ContactHeader = () => {
  const { user } = useContext(UserContext);
  return (
    <Stack
      direction="row"
      width="100%"
      height="70px"
      sx={{
        backgroundColor: blueGrey[700],
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
        <Avatar src={<PersonIcon />} />
        <Typography paddingInlineStart={2} fontSize={20} fontWeight="bold">
          {user.name}
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
        <IconButton sx={{ color: "white" }} children={<GroupsIcon />} />
        <IconButton sx={{ color: "white" }} children={<ChatIcon />} />
        <IconButton sx={{ color: "white" }} children={<MoreVertIcon />} />
      </Stack>
    </Stack>
  );
};

export default ContactHeader;
