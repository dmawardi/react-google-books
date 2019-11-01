import React from "react";
import("./style.css");
// import Thumbnail from "../Thumbnail";

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    // Build card
    <div key={props.id} className="card">
      <div className="card-header">
        <span>{props.title}</span>

        {/* Start button section of header */}
        <div>
          <a href={props.link} className="btn btn-primary">
            View
          </a>

          {/* If the page state is saved, then display delete button. Else, display save button */}
          {props.pageState === "Saved" ? (
            <a href="/" className="btn btn-primary" data-id={props.id}>
              Delete
            </a>
          ) : (
            <a href="/" className="btn btn-primary" data-id={props.id}>
              Save
            </a>
          )}
        </div>
      </div>

      {/* Card body */}
      <div key={props.id} className="card-body">
        <div className="row">
          <div className="col-md-4">
            {/* Book image thumbnail */}
            <img
              src={props.thumbnail}
              className="card-img"
              alt={props.title}
            ></img>
          </div>
          {/* Book details */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {props.title + " by " + props.authors}
              </h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text">
                <small className="text-muted">ISBN: </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
