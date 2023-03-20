import styled from 'styled-components';
export const FormStyled = styled.form`
   {
    display: grid;
    padding: 20px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;
export const ButtonStyled = styled.button`
   {
    color: black;
    cursor: pointer;
    padding: 8px 16px;
    margin-top: 20px;
    background-color: white;
    border-radius: 15px;
    font-weight: bold;
    color: rgb(9, 79, 137);
    font-size: 30px;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
export const InputStyled = styled.input`
   {
    font-size: 18px;
    font-weight: bold;
    height: 40px;
    border-radius: 15px;
    outline: none;
  }
`;
export const LabelStyled = styled.label`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    alignitems: center;
  }
`;
export const Headers = styled.h1`
   {
    font-size: 60px;
  }
`;


