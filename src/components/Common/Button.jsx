// src/components/Common/Button.jsx
import React from "react";
import "./Common.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
