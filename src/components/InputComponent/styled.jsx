import styled from "styled-components";

export const InputComponentContainer = styled.div`
  width: 100%;
  label {
    display: block;
    font: 400 12px "Manrope";
    line-height: 30px;
  }
  input {
    width: 100%;
    height: 60px;
    padding: 15px;
    font: 400 18px "Manrope";
    color: #000;
    border: 1px solid #999999;
    border-radius: 5px;
    &::placeholder {
      color: #999999;
    }
  }
  .error-text {
    font-size: 400 12px "Manrope";
    color: red;
    margin-top: 9px;
    text-transform: capitalize;
  }
`;
