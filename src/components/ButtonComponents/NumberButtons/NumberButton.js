import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={() => props.setOutput(props.number)} className="numberButton">{props.number}</button>
    </>
  );
};

function InputNumber(props) {
  props.setOutput(props.number);
  
}

export default NumberButton;
