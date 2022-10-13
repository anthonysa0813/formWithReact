import React, { useEffect } from "react";
import Input from "../components/Input";
import { FormContainer, MainContainer } from "../styles/login";
import { getCountries } from "../utils/api/useFetch";

const Register = () => {
  useEffect(() => {
    console.log("holis");
    getCountries().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <MainContainer>
      <div className="wrapperMain">
        <FormContainer>
          <h1>Create your account</h1>
          <Input name="email" type="email" value="" placeholder="Email" />
          <Input
            name="password"
            type="password"
            value=""
            placeholder="Password"
          />
          <Input
            name="password"
            type="password"
            value=""
            placeholder="Retype Password"
          />
        </FormContainer>
      </div>
    </MainContainer>
  );
};

export default Register;
