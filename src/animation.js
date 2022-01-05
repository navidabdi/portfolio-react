// import { motion } from "framer-motion";

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .75,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: .75,
    },
  }
};
