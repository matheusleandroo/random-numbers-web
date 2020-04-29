import styled from 'styled-components';

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

export const DivIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0.9;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

export const Card = styled.div`
  border: 1px solid #a7a7a7;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
`;
