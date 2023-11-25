import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

//Arrays:
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  // If the button has no style set STYLES[0] as the default style:
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) 
  ? buttonSize 
  : SIZES[0];

  return (
    <Link to="/sign-up">
      <button
        className={` ${checkButtonStyle} ${checkButtonSize} btn btn-light ${STYLES}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
    //</Popup>
  );
};

export default Button;