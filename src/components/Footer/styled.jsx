import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #fff;
  padding: 123px 0 76px 0;
  .title {
    font: 700 21px "Poppins";
    color: #1b1c31;
    line-height: 28px;
    margin-bottom: 28px;
  }
  .descri {
    font: 400 16px "Manrope";
    color: #757095;
    margin-bottom: 31px;
  }
  .social-list {
    display: flex;
    align-items: center;
    gap: 0 16px;
  }
  .label {
    font: 700 21px "Manrope";
    color: #181433;
    margin-bottom: 24px;
    line-height: 24px;
  }
  .link-item {
    font: 400 16px "Manrope";
    color: #181433;
    margin-bottom: 24px;
    line-height: 24px;
  }
  .input-group {
    input {
      font: 500 16px "Manrope";
      color: #181433;
      padding: 15px;
      height: 52px;
      background-color: #f9f9f9;
      border: none;
      outline: none;
      &::placeholder {
        color: rgba(24, 20, 51, 0.2);
      }
    }
    button {
      padding: 0 37px;
      font: 500 16px "Manrope";
      color: #fff;
      background-color: #00e1f0;
      border: none;
      outline: none;
    }
  }
  .info-item {
    font: 500 16px "Manrope";
    color: #00e1f0;
    margin-top: 21px;
  }
  .copy-right {
    font: 500 16px "Manrope";
    color: #181433;
    padding-top: 40px;
    border-top: 2px solid #E5E5EA;
    margin-top: 60px;
    text-align: center;
  }
`;
