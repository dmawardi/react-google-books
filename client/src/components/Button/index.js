import React from "react";

// Destructuring the type, className, children and onClick props, and building the button using them
function Button({ type = "default", className, children, onClick }) {
  return (
    // Build button using destructured props
    <button
      onClick={onClick}
      className={["btn btn-lg", `btn-${type}`, className].join(" ")}
    >
      {children}
    </button>
  );
}

// Export
export default Button;
