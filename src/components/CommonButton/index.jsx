import React from "react";
import { CommonButtonContainer } from "./styled";

const CommonButton = ({ text, type, className, onClick }) => {
  return <CommonButtonContainer className={className} onClick={onClick && onClick} type={type}>{text}</CommonButtonContainer>;
};

export default CommonButton;
