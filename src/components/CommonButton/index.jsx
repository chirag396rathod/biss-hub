import React from "react";
import { CommonButtonContainer } from "./styled";

const CommonButton = ({ text, type, className }) => {
  return <CommonButtonContainer className={className} type={type}>{text}</CommonButtonContainer>;
};

export default CommonButton;
