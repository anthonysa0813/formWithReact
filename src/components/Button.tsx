import React from "react";
import { ButtonContainer } from "../styles/globals";

interface PropButton {
  content: string;
  type: "submit" | "button" | "reset";
}

const Button = ({ content, type }: PropButton) => {
  return <ButtonContainer type={type}>{content}</ButtonContainer>;
};

export default Button;
