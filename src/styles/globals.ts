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

export const SelectContainer = styled.div`
  border: 1px solid var(--bg-gray200);
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 0.5rem 0.75rem;
  background-color: white;
  svg {
    color: var(--bg-primary);
  }
  select {
    width: 100%;
    border: none;
    color: var(--bg-primary);
  }
`;
