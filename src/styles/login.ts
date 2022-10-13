import styled from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .wrapperMain {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    .logoContainer {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-block-end: 50px;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }

  .messageBottom {
    margin-block-start: 2rem;
    width: 100%;
    border-top: 1px solid var(--bg-gray200);
    display: flex;
    justify-content: center;
    span {
      color: var(--bg-primary);
      font-weight: bold;
    }
  }
`;

export const FormContainer = styled.form`
  width: 70%;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  h1 {
    text-align: center;
    color: var(--bg-primary);
    font-weight: bold;
  }

  .rememberSection {
    margin-bottom: 2rem;
  }

  .forgotSection {
    display: flex;
    justify-content: flex-end;
  }

  .termsContainer {
    display: flex;
    align-items: center;
    input {
      border-radius: 50%;
    }
    span {
      color: var(--bg-primary);
      font-weight: bold;
    }
  }
`;
