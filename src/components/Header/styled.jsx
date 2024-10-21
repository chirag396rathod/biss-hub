import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 28px 0;
  z-index: 999;
  position: relative;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo-container {
    width: 181px;
    height: 23px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 25px;
    .nav-item {
      a {
        font: 600 14px "Manrope";
        color: #000;
        cursor: pointer;
      }
      img {
        margin-left: 12px;
      }
    }
  }
  .action-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 25px;
    span {
      font: 600 14px "Manrope";
      color: #000;
      cursor: pointer;
    }
  }
`;
