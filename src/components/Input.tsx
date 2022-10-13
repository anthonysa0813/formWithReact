import React from "react";
import { InputContainer } from "../styles/globals";

interface Prop {
  value: string;
  type: string;
  name: string;
  placeholder?: string;
}

const Input = ({ value, type, name, placeholder }: Prop) => {
  return (
    <InputContainer
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;
