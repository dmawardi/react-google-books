import React from "react";
import "./style.css";

// Nav bar return function
function Nav(props) {
  return (
    // Nav Bar
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li
            className={
              // Make this the active link class if detected in state
              props.currentState === "Search"
                ? "nav-item active"
                : // Else, set to empty div
                  "nav-item"
            }
            onClick={props.handlePageChange}
          >
            <a className="nav-link" href="/">
              Search
              {/* If the current state is Search, set this to current for reader */}
              {props.currentState === "Search" ? (
                <span className="sr-only">(current)</span>
              ) : (
                // Else, set to empty div
                <></>
              )}
            </a>
          </li>
          <li
            className={
              // Make this the active link class if detected in state
              props.currentState === "Search"
                ? "nav-item active"
                : // Else, set to empty div
                  "nav-item"
            }
            onClick={props.handlePageChange}
          >
            <a className="nav-link" href="/">
              Saved
              {/* If the current state is Search, set this to current for reader */}
              {props.currentState === "Saved" ? (
                <span className="sr-only">(current)</span>
              ) : (
                // Else, set to empty div
                <></>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
