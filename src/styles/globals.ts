import styled from "styled-components";

export const InputContainer = styled.input`
  border: none;
  border-radius: 0.15rem;
  border: 1px solid var(--bg-gray100);
  padding: 0.5rem;
  &::placeholder {
    color: var(--bg-gray200);
  }
`;

export const ButtonContainer = styled.button`
  background-color: var(--bg-primaryLight);
  color: var(--bg-gray100);
  padding: 0.5rem;
  border-radius: 100px;
  border: none;
`;
