import React, { useState } from "react";
import { HeaderContainer } from "./styled";

import logo from "../../assets/logo.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import CommonButton from "../CommonButton";
import LoginModal from "../../view/auth/LoginModal";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(!show);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <div className="nav-item">
            <a to={"/product"}>Product</a>
            <img src={ArrowDown} alt="ArrowDown" />
          </div>
          <div className="nav-item">
            <a to={"/template"}>Template</a>
            <img src={ArrowDown} alt="ArrowDown" />
          </div>
          <div className="nav-item">
            <a to={"/blog"}>Blog</a>
          </div>
          <div className="nav-item">
            <a to={"/pricing"}>Pricing</a>
          </div>
        </nav>
        <div className="action-button">
          <span onClick={handleClose}>Sign In</span>
          <CommonButton text="Start Free" type="button" />
        </div>
      </div>
      {show && <LoginModal show={show} handleClose={handleClose} />}
    </HeaderContainer>
  );
};

export default Header;
