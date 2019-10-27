const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"

// Matches with "/api/books/:id"
// finds by ID and removes
router
  .route("/:title")
  // the findbyId function grabs the url request parameter and uses it to search
  .post();

module.exports = router;
