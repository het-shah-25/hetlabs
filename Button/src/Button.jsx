import React from "react";
import MaterialButton from "@mui/material/Button";

const COLORS = {
  primary: "#E93E3A",
  secondary: "#71717A",
  error: "#FF0000",
  warning: "#ffa726",
};

const Button = (props) => {
  const {
    className,
    name,
    backgroundColor = COLORS.primary,
    fontColor = "#FFFFFF",
    onClick,
    width = "100%",
    ...otherProps
  } = props;

  const buttonStyle = {
    backgroundColor,
    color: fontColor,
    width,
  };

  return (
    <MaterialButton
      className={className}
      style={buttonStyle}
      onClick={onClick}
      {...otherProps}
    >
      {name}
    </MaterialButton>
  );
};

export default Button;
