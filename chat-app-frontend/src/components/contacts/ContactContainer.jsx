import { Box } from "@mui/material";
import React from "react";
import ContactHeader from "./ContactHeader";
import { blueGrey } from "@mui/material/colors";
import ContactSection from "./ContactSection";

const ContactContainer = () => {
  return (
    <Box
      height={"100%"}
      width={500}
      sx={{
        backgroundColor: blueGrey[900],
      }}
    >
      <ContactHeader />
      <ContactSection />
    </Box>
  );
};

export default ContactContainer;
