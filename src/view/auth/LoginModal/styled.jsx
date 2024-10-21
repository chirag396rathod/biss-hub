import styled from "styled-components";

export const LoginContainer = styled.form`
  max-width: 540px;
  margin: 0 auto;
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
