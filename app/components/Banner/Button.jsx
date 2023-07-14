import React from "react";

const Button = (props) => {
  return (
    <button className={`font-bold h-16 w-1/2 rounded-full border-4 ${props.buttonClass}`}>
      {props.text}
    </button>
  );
};
export default Button;
