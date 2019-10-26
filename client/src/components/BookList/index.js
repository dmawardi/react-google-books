import React from "react";
import("./style.css");
// import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    <div className="card">
      <div className="card-header">
        <span>Title</span>
        <div>
          <a href="/" class="btn btn-primary">
            View
          </a>
          <a href="/" class="btn btn-primary">
            Delete
          </a>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <img src="..." className="card-img" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
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
