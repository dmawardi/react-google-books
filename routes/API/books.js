const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// Saves books to db
router
  .route("/saveBook")
  .get(booksController.findAll)
  .post(booksController.create);

// Check all books in database
router.route("/savedBooks").get(booksController.findAll);

// Matches with "/api/books/:id"
// finds by ID and removes
router
  .route("/savedBooks/:id")
  // the findbyId function grabs the url request parameter and uses it to search
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
