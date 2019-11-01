const router = require("express").Router();
const googleBookSearch = require("../../controllers/googleBooks");

// Matches with "/api/getBooks/*"
router.get("/:title", (req, res) => {
  console.log("Request accepted to search for: " + req.params.title);
  // Search Google Books using googleBooks controller
  googleBookSearch(req.params.title)
    .then(response => {
      console.log("RESPONSE DATA ITEMS\n", response.data.items);
      console.log("RESPONSE N---------------------------------\n", response);

      res.json(response.data.items);
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    });
});

module.exports = router;
