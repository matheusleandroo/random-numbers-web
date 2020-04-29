import styled from 'styled-components';

import { Card as CardBootstrap } from 'react-bootstrap';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 25px 0 35px;

    svg {
      margin-right: 10px;
    }
  }

  hr {
    margin: 40px 0;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin: 70px auto;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  input {
    border: 1px solid #a7a7a7;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    input {
      margin-bottom: 10px;
    }
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #519739;
  color: #fff;
  border: 0;
  margin-top: 30px;
  padding: 0 15px;
  border-radius: 4px;
  width: 100%;
  min-height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const CopyButton = styled.button`
  background: #519739;
  color: #fff;
  border: 0;
  border-radius: 4px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-bottom: 15px;
  margin-left: 92%;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Card = styled(CardBootstrap)`
  border: 1px solid #a7a7a7;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;
