"use client";

import { motion, MotionProps } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import ComponentThemeContext from "../context/ComponentThemeContext";

interface ButtonProps extends MotionProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
}

const StyledButton = styled(motion.button)<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  color: ${({ theme }) => theme.secondaryHex};
  background-color: ${({ theme }) => theme.primaryHex};
  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "2rem";
      case "medium":
        return "3rem";
      case "large":
        return "4rem";
      default:
        return "3rem";
    }
  }};
  width: ${({ size }) => {
    switch (size) {
      case "small":
        return "6rem";
      case "medium":
        return "9rem";
      case "large":
        return "12rem";
      default:
        return "9rem";
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "0.75rem";
      case "medium":
        return "1rem";
      case "large":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};
`;

const Button = (props: ButtonProps) => {
  const { state: theme } = useContext(ComponentThemeContext);

  return (
    <StyledButton
      {...props}
      theme={theme}
      whileHover={{ scale: 1.03, cursor: "pointer" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 1000, damping: 50 }}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
