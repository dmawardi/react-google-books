import React from "react";
import("./style.css");
// import Thumbnail from "../Thumbnail";

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    // Build card
    <div key={props.identifier} className="card">
      <div key={props.identifier} className="card-header">
        <span>{props.title}</span>

        {/* Start button section of header */}
        <div>
          <a
            key={props.identifier}
            href={props.infoLink}
            class="btn btn-primary"
          >
            View
          </a>

          {/* If the page state is aved, then display delete button. Else, display save button */}
          <a
            key={props.identifier}
            href="/"
            className="btn btn-primary"
            data-id={props.identifier}
          >
            {props.pageState === "Saved" ? "Delete" : "Save"}
          </a>
        </div>
      </div>

      {/* Card body */}
      <div key={props.identifier} className="card-body">
        <div key={props.identifier} className="row">
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
                <small className="text-muted">ISBN: {props.identifier}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <li className="list-group-item">
//       <Container>
//         <Row>
//           <Col size="xs-4 sm-2">
//             <Thumbnail src="http://img.recipepuppy.com/560556.jpg" />
//           </Col>
//           <Col size="xs-8 sm-9">
//             <h3>Vegetable-Pasta Oven Omelet</h3>
//             <p>
//               Ingredients: "tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese,
//               vermicelli, eggs, parmesan cheese, milk, italian seasoning, salt, black pepper"
//             </p>
//             <a
//               rel="noreferrer noopener"
//               target="_blank"
//               href="http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763"
//             >
//               Go to recipe!
//             </a>
//           </Col>
//         </Row>
//       </Container>
//     </li>
