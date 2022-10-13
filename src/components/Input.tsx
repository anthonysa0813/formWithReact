import React from "react";
import { InputContainer } from "../styles/globals";

interface Prop {
  value?: string;
  type: string;
  name: string;
  placeholder?: string;
  checked?: boolean;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  type,
  name,
  placeholder,
  checked,
  onClick,
  onChange,
}: Prop) => {
  return (
    <InputContainer
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      checked={checked}
      onClick={onClick}
      onChange={onChange}
    />
  );
};

export default Input;
