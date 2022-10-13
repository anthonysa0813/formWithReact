import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import InputSelect from "../components/InputSelect";
import { CountriesListResponse } from "../interfaces";
import { FormContainer, MainContainer } from "../styles/login";
import { getCountries } from "../utils/api/useFetch";
import { BiSearch } from "react-icons/bi";
import Button from "../components/Button";
import { useForm } from "../hooks/useForm";
import logo from "../assets/logo.jpg";

interface Prop {
  setShowComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = ({ setShowComponent }: Prop) => {
  const [countries, setCountries] = useState<CountriesListResponse[] | []>([]);
  const [checkedState, setCheckedState] = useState(false);
  const [error, setError] = useState(false);
  const { formState, handleChange } = useForm({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const { email, password, repeatPassword } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([email, password, repeatPassword].includes("")) {
      setError(true);
      return;
    }

    // validando que los campos tengan información
    setError(false);
    localStorage.setItem("userRegister", JSON.stringify(formState));
    console.log("se guardó...");
  };

  const showRegister = () => {
    setShowComponent((state) => !state);
  };

  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res);
    });
  }, []);

  return (
    <MainContainer>
      <div className="wrapperMain">
        <div className="logoContainer">
          <img src={logo} alt="" />
          <p className="textGray">
            <span className="text-purple">Mercury</span>Cash
          </p>
        </div>
        <FormContainer onSubmit={handleSubmit}>
          <h1>Create your account</h1>
          {error && (
            <span className="alert">Todos los campos son requeridos...</span>
          )}
          <Input
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <Input
            name="repeatPassword"
            type="password"
            value={repeatPassword}
            placeholder="Retype Password"
            onChange={handleChange}
          />
          <InputSelect>
            <BiSearch />
            <select name="" id="">
              <option value="">Seleccione</option>
              {countries.map((country) => {
                return (
                  <option value={country.name.common}>
                    {country.name.common}
                  </option>
                );
              })}
            </select>
          </InputSelect>
          <InputSelect>
            <select name="" id="">
              <option value="">Seleccione</option>
              <option value="Español">Español</option>
              <option value="Ingles">Ingles</option>
              <option value="Aleman">Aleman</option>
            </select>
          </InputSelect>
          <div className="termsContainer">
            <Input
              name="terms"
              type="radio"
              checked={checkedState}
              onClick={() => setCheckedState(!checkedState)}
            />
            <p>
              By continuing i agree to the <span>Term of Services</span> and{" "}
              <span>Privacy Policy</span>
            </p>
          </div>
          <Button content="Sign up" type="submit" />
        </FormContainer>
        <div className="messageBottom ">
          <p>
            Don't have an account? <span onClick={showRegister}>Sign up</span>{" "}
            instead.
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Register;
