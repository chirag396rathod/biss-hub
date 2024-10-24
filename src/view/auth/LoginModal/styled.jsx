import styled from "styled-components";

export const LoginContainer = styled.form`
  max-width: 540px;
  margin: 0 auto;
  position: relative;
  .close-icon {
    position: absolute;
    top: -50px;
    right: -100px;
    background-color: rgba(255, 255, 255,0.3);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .title {
    font: 500 30px "Poppins";
    color: #1d1d3e;
    line-height: 42px;
    margin-bottom: 52px;
    text-align: center;
    margin-top: 52px;
  }
  .content {
    width: 100%;
    .email-input--group {
      margin-bottom: 42px;
    }
    .forgot-password-link {
      text-align: right;
      margin-top: 12px;
      a {
        font: 400 18px "Poppins";
        color: #4f46ba;
      }
    }
    .remember-me-text {
      font: 400 18px "Poppins";
      color: #1d1d3e;
      margin-top: 40px;
      margin-bottom: 12px;
    }
    button {
      width: 100%;
      margin-bottom: 60px;
      font: 500 20px "Poppins";
      height: 60px;
    }
    .footer-link {
      text-align: center;
      font: 400 18px "Poppins";
      color: #1d1d3e;
      margin-bottom: 16px;
      span {
        color: #4f46ba;
        cursor: pointer;
      }
    }
  }
`;
