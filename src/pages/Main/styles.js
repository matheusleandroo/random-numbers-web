import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 195px;
  min-height: 40px;
  opacity: 0.9;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    opacity: 1;
  }
`;
