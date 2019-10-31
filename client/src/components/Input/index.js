import React from "react";

// Function to create input item
function Input(props) {
  return (
    // Input item
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

export default Input;
