import axios from "axios";

export const getCountries = async () => {
  const data = await axios.get("http://country.io/names.json");
  return data;
};
