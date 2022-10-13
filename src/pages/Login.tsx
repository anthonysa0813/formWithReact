import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { FormContainer, MainContainer } from "../styles/login";

interface PropLogin {
  setShowComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({ setShowComponent }: PropLogin) => {
  const showRegister = () => {
    setShowComponent((state) => !state);
  };

  return (
    <MainContainer className="">
      <div className="wrapperMain">
        <FormContainer className="">
          <h1>Welcome Back</h1>
          <Input value="" name="email" type="email" placeholder="Email" />
          <Input
            value=""
            name="password"
            type="password"
            placeholder="Password"
          />
          <div className="forgotSection">
            <a href="">Forgot password</a>
          </div>
          <div className="rememberSection">
            <Input value="" name="remember" type="checkbox" /> Remember me.
          </div>
          <Button content="Login" type="button" />
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

export default Login;
