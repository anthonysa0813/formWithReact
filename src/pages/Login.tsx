import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useForm } from "../hooks/useForm";
import { FormContainer, MainContainer } from "../styles/login";
import logo from "../assets/logo.jpg";
interface PropLogin {
  setShowComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setShowComponent }: PropLogin) => {
  const [error, setError] = useState(false);
  const showRegister = () => {
    setShowComponent((state) => !state);
  };
  const { formState, handleChange } = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ([email, password].includes("")) {
      setError(true);
      return;
    }

    // validando que los campos tengan información
    setError(false);
    localStorage.setItem("userData", JSON.stringify(formState));
    console.log("se guardó...");
  };

  return (
    <MainContainer className="">
      <div className="wrapperMain ">
        <div className="logoContainer">
          <img src={logo} alt="" />
          <p className="textGray">
            <span className="text-purple">Mercury</span>Cash
          </p>
        </div>
        <FormContainer onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>
          {error && (
            <span className="alert">Todos los campos son requeridos...</span>
          )}
          <Input
            value={email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            value={password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <div className="forgotSection">
            <a href="">Forgot password</a>
          </div>
          <div className="rememberSection">
            <Input value="" name="remember" type="checkbox" /> Remember me.
          </div>
          <Button content="Login" type="submit" />
        </FormContainer>
        <div className="messageBottom ">
          <p>
            have an account? <span onClick={showRegister}>Log in</span> instead.
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Login;
