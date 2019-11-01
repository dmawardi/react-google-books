const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// All below routes match with "/api/books/*"
// Saves books to db
router.route("/saveBook").post((req, res) => {
  console.log("req:", req.body);
  // console.log("res: ", res);
  // Use Books controller to create a new document
  booksController
    .create(req)
    // Then
    .then(data => {
      // Send status 200
      console.log("Saved: ", data);
      res.sendStatus(200);
    })
    .catch(err => {
      // Send status 500
      console.error(err);
      res.sendStatus(500);
    });
});

// Return all books in database
// router.route("/savedBooks").get(booksController.findAll);

router.get("/savedBooks", function(req, res) {
  booksController
    .findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.sendStatus(500);
    });
});

router.get("/test", function(req, res) {
  res.send("Working!");
});

// finds by ID and removes from delete request
router
  .route("/savedBooks/:id")
  // the findbyId function grabs the url request parameter and uses it to search
  .delete(() => {
    // Use book controller to remove by id
    booksController.removeById(req.params.id).then(() => {
      // If all fine, send status 200
      res.sendStatus(200);
    });
  });

module.exports = router;
