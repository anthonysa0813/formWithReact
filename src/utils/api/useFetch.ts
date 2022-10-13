import axios from "axios";
import { CountriesListResponse } from "../../interfaces";

export const getCountries = async () => {
  const { data } = await axios.get(
    "https://restcountries.com/v3.1/region/america"
  );
  return data;
};
