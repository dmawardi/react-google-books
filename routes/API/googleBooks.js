const router = require("express").Router();
const googleBookSearch = require("../../controllers/googleBooks");

// Matches with "/api/books"

// Matches with "/api/books/:id"
// finds by ID and removes
// router
//   .route("/:title")
//   // the findbyId function grabs the url request parameter and uses it to search
//   .post();

router.get("/:title", (req, res) => {
  console.log("Request accepted to search for: " + req.params.title);
  googleBookSearch(req.params.title)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
