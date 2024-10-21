import React from "react";
import { Modal } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { NotificationContainer } from "./styled";

const NotificationModal = ({ show, handleClose }) => {
  return (
    <Modal
      className="notification-modal"
      size="md"
      show={show}
      onHide={handleClose}
    >
      <Modal.Body>
        <div className="close-icon" onClick={handleClose}>
          <IoMdClose size={24} />
        </div>
        <NotificationContainer>
          <div className="notification-item">
            <div className="user-image"></div>
            <div className="message">
              <span className="username">Shahna Celom </span>
              sent you a message!
            </div>
          </div>
          <div className="notification-item">
            <div className="user-image"></div>
            <div className="message">
              <span className="username">Shahna Celom </span>
              sent you a message!
            </div>
          </div>
          <div className="notification-item">
            <div className="user-image"></div>
            <div className="message">
              <span className="username">Shahna Celom </span>
              sent you a message!
            </div>
          </div>
          <div className="notification-item">
            <div className="user-image"></div>
            <div className="message">
              <span className="username">Shahna Celom </span>
              sent you a message!
            </div>
          </div>
          <div className="notification-item">
            <div className="user-image"></div>
            <div className="message">
              <span className="username">Shahna Celom </span>
              sent you a message!
            </div>
          </div>
         
        </NotificationContainer>
      </Modal.Body>
    </Modal>
  );
};

export default NotificationModal;
