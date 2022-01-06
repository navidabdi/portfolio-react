import styled from "styled-components";
import { motion } from "framer-motion";
export const StyleLayout = styled(motion.div)`
  padding: 4.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  @media screen and (max-width: 998px) {
    flex-direction: column;
    align-items: unset;
  }
  .description {
    flex: 1;
    z-index: 2;
    h2 {
      font-weight: lighter;
    }
  }
  .image {
    flex: 1;
    overflow: hidden;
    z-index: 2;
    img {
      width: 100%;
      height: 78vh;
      object-fit: cover;
      @media screen and (max-width: 1500px) {
        height: auto;
      }
    }
    @media screen and (max-width: 998px) {
      object-fit: unset;
      margin: 4rem 0;
    }
  }
  .hide {
    overflow: hidden;
  }
`;
