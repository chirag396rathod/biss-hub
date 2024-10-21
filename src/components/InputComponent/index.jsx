import React from "react";
import { InputComponentContainer } from "./styled";

const InputComponent = ({
  label,
  type,
  onChange,
  value,
  name,
  placeholder,
  className,
  error
}) => {
  return (
    <InputComponentContainer className={className}>
      {label && <label>{label}</label>}
      <input
        type={type || "text"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className="error-text">{error}</p>}
    </InputComponentContainer>
  );
};

export default InputComponent;
