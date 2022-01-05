import react from "react";
// Import The ContactUs Page Components

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact Us</h1>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)``;
export default ContactUs;
