import React, { useEffect } from "react";
import { CountriesListResponse } from "../interfaces";

import { SelectContainer } from "../styles/globals";

interface Prop {
  children: JSX.Element[] | JSX.Element;
}

const InputSelect = ({ children }: Prop) => {
  return <SelectContainer>{children}</SelectContainer>;
};

export default InputSelect;
