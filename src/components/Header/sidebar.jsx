import React from "react";
import { Modal } from "react-bootstrap";
import { SidebarLayout } from "./styled";
import { MdOutlineClose } from "react-icons/md";
import CommonButton from "../CommonButton";
import ArrowDown from "../../assets/arrow-down.svg";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({
  handleClose,
  show,
  handleSignUp,
  handleSignIn,
  handleSignOut,
}) => {
  const user = useSelector((state) => state.commonReducer.user);
  const dispatch = useDispatch();

  return (
    <Modal className="modal-sidebar" show={show} onHide={handleClose}>
      <Modal.Body>
        <SidebarLayout>
          <div className="close-icon">
            <MdOutlineClose
              color="var(--header-bg-light-color)"
              onClick={handleClose}
              size={24}
            />
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
          {user?.userId ? (
            <>
              <div className="login-user">
                <CommonButton
                  className={"alt-button"}
                  text={
                    <div className="name">
                      {user?.firstName} {user?.lastName}
                    </div>
                  }
                ></CommonButton>
                <CommonButton
                  onClick={handleSignOut}
                  text={<IoIosLogOut size={24} color="#fff" />}
                ></CommonButton>
              </div>
            </>
          ) : (
            <>
              <CommonButton
                className={"alt-button"}
                text="Sign in"
                onClick={() => {
                  handleSignIn();
                  handleClose();
                }}
              />
              <CommonButton
                onClick={() => {
                  handleSignUp();
                  handleClose();
                }}
                text="Sign Up"
              />
            </>
          )}
        </SidebarLayout>
      </Modal.Body>
    </Modal>
  );
};

export default Sidebar;
