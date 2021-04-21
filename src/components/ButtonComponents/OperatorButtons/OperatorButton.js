import React from "react";

const OperatorButton = (prop) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operatorButton">{prop.operator.char}</button>
    </>
  );
};

export default OperatorButton;