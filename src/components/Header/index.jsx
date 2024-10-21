import React, { useEffect, useState } from "react";
import { HeaderContainer } from "./styled";

import logo from "../../assets/logo.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import CommonButton from "../CommonButton";
import LoginModal from "../../view/auth/LoginModal";
import SignUpModal from "../../view/auth/SignUpModal";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/auth/commonSlice";
import { IoIosNotifications } from "react-icons/io";
import NotificationModal from "./NotificationModal";
import { IoIosLogOut } from "react-icons/io";


const Header = () => {
  const user = useSelector((state) => state.commonReducer.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleClose = () => {
    setShow(!show);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  const handleNotification = () => {
    setShowNotification(!showNotification);
  };

  const handleSignOut = () => {
    localStorage.clear();
    dispatch(setUser(null))
  }

  useEffect(() => {
    const localUser =
      localStorage.getItem("userInfo") &&
      JSON.parse(localStorage.getItem("userInfo"));
    dispatch(setUser(localUser));
  }, []);

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
          {user?.userId ? (
            <>
              <IoIosNotifications onClick={handleNotification} size={24} />
              <div className="login-user">
                <div className="name">
                  {user?.firstName} {user?.lastName}
                </div>
                <div className="profile">
                  <IoIosLogOut size={24} onClick={handleSignOut} color="#fff" />
                </div>
              </div>
            </>
          ) : (
            <>
              <span onClick={handleClose}>Sign In</span>
              <CommonButton
                onClick={handleCloseSignUp}
                text="Start Free"
                type="button"
              />
            </>
          )}
        </div>
      </div>
      {show && (
        <LoginModal
          show={show}
          handleClose={handleClose}
          handleSignUp={handleCloseSignUp}
        />
      )}
      {showSignUp && (
        <SignUpModal
          show={showSignUp}
          handleClose={handleCloseSignUp}
          handleSignIn={handleClose}
        />
      )}
      {showNotification && (
        <NotificationModal
          show={showNotification}
          handleClose={handleNotification}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
