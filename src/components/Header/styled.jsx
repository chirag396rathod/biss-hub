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
  .login-user {
    background: rgba(79, 70, 186, 0.1);
    height: 42px;
    border-radius: 5px;
    padding: 0 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    .name {
      font: 600 16px "Manrope";
      color: #4f46ba;
      text-transform: capitalize;
    }
    .profile {
      width: 32px;
      height: 32px;
      background-color: rgba(79, 70, 186, 0.7);
      border-radius: 5px;
      margin-left: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 991px) {
    .container {
      nav {
        display: none;
      }
      .action-button {
        display: none;
      }
    }
  }
`;

export const NotificationContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  .notification-item {
    display: flex;
    align-items: center;
    padding-top: 25px;
    margin-bottom: 22px;
    border-top: 1px solid #ececec;
    &:first-child {
      border-top: none;
      padding-top: 0px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
    .user-image {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #64607d;
      margin-right: 10px;
    }
    .message {
      span {
        font: 700 15px Poppins;
        color: #000;
      }
      font: 400 15px Poppins;
      color: #64607d;
    }
  }
`;
export const SidebarLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .close-icon {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  nav {
    margin-top: 24px;
    .nav-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
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
  .alt-button{
    border: 1px solid #4f46ba;
    background-color: #fff;
    color: #4f46ba;
    margin-bottom: 16px;
    margin-top: 12px;
  }
  .login-user{
    width: 100%;
    button{
      width: 100%;
    }
  }
`;
